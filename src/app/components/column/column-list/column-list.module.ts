import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ColumnListComponent} from "./column-list.component";
import {ColumnItemModule} from "../column-item/column-item.module";



@NgModule({
    imports: [
        BrowserModule,
        ColumnItemModule,
        MaterialModule
    ],
    declarations: [
        ColumnListComponent
    ],
    exports: [
        ColumnListComponent
    ]
})

export class ColumnListModule {
}