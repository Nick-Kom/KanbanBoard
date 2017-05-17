import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ColumnComponent} from './column.component';
import {ColumnListModule} from "./column-list/column-list.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        BrowserModule,
        ColumnListModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        ColumnComponent
    ],
/*    providers: [
 ColumnService
    ],*/
    exports: [
        ColumnComponent
    ]
})

export class ColumnModule { }
