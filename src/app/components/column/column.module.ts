import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {ColumnComponent} from './column.component';
import {ColumnListModule} from "./column-list/column-list.module";
import {ColumnService} from "./column.service";
import {DragulaModule} from "ng2-dragula";

import {InMemoryDataService} from "../../shared/data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
    imports: [
        BrowserModule,
        ColumnListModule,
        MaterialModule,
        BrowserAnimationsModule,
        DragulaModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        ColumnComponent
    ],
    providers: [
        ColumnService
    ],
    exports: [
        ColumnComponent
    ]
})

export class ColumnModule { }
