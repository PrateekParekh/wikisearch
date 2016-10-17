import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class WikiSearchService {

    constructor(private jsonp: Jsonp) {}

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term=>this.rawSearch(term));
    }

    rawSearch(term: string) {
        var search = new URLSearchParams();
        search.set('action','opensearch');
        search.set('search',term);
        search.set('format','json');

        return this.jsonp
            .get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
            .map((request)=>request.json()[1]);
    }
}