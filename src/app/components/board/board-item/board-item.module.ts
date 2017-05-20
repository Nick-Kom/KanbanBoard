import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {BoardItemComponent} from "./board-item.component";
import {ColumnModule} from "../../column/column.module";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";


@NgModule({
    imports: [
        BrowserModule,
        ColumnModule,
        MaterialModule
    ],
    declarations: [
        BoardItemComponent,
        AlertConfirmDeleting
    ],
    entryComponents: [AlertConfirmDeleting],
    exports: [
        BoardItemComponent
    ]
})

export class BoardItemModule {
}