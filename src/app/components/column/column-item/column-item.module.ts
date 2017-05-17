import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ColumnItemComponent} from "./column-item.component";
import {CardModule} from "../../card/card.module";


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        CardModule
    ],
    declarations: [
        ColumnItemComponent
    ],
    exports: [
        ColumnItemComponent
    ]
})

export class ColumnItemModule {
}