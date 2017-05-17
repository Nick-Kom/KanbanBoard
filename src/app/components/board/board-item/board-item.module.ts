import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {BoardItemComponent} from "./board-item.component";
import {ColumnModule} from "../../column/column.module";


@NgModule({
    imports: [
        BrowserModule,
        ColumnModule,
        MaterialModule
    ],
    declarations: [
        BoardItemComponent
    ],
    exports: [
        BoardItemComponent
    ]
})

export class BoardItemModule {
}