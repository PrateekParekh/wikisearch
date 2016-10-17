import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/observable';
import {WikiSearchService} from "./wikisearch.service";

@Component({
    selector: 'wiki-search',
    template:   `
        <div>
            <h2>Wikipedia Search</h2>
            <input type="text" [formControl]="term">
            <ul>
                <li *ngFor="let item of items | async">{{item}}</li>
            </ul>
        </div>
    `
})

export class WikiSearchComponent {
    items: Observable<Array<string>>;
    term = new FormControl();
    constructor(private _wikiSearchService: WikiSearchService) {}
    ngOnInit() {
        this.items = this._wikiSearchService.search(this.term.valueChanges);
    }
}