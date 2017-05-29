import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BoardComponent} from './board.component';
import {BoardListModule} from "./board-list/board-list.module";
import {BoardService} from "./board.service";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../shared/data.service";

@NgModule({
    imports: [
        BrowserModule,
        BoardListModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        BoardComponent
    ],
    providers: [
        BoardService
    ],
    exports: [
        BoardComponent
    ]
})

export class BoardModule { }
