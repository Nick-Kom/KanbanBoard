import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {BoardComponent} from './board.component';
import {BoardListModule} from "./board-list/board-list.module";


@NgModule({
    imports: [
        BrowserModule,
        BoardListModule,
        MaterialModule
    ],
    declarations: [
        BoardComponent
    ],
/*    providers: [
        BoardService
    ],*/
    exports: [
        BoardComponent
    ]
})

export class BoardModule { }
