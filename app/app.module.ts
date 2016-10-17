import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {WikiSearchComponent} from "./wikisearch.component";
import {WikiSearchService} from "./wikisearch.service";

@NgModule({
    imports:      [ BrowserModule, JsonpModule, ReactiveFormsModule ],
    declarations: [ AppComponent, WikiSearchComponent ],
    providers:    [WikiSearchService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
