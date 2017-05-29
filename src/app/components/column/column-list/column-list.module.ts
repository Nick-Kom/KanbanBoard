import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ColumnListComponent} from "./column-list.component";
import {ColumnItemModule} from "../column-item/column-item.module";
import {ColumnService} from "../column.service";
import {DragulaModule} from "ng2-dragula";


@NgModule({
    imports: [
        BrowserModule,
        ColumnItemModule,
        MaterialModule,
        BrowserAnimationsModule,
        DragulaModule,
        ReactiveFormsModule
    ],
    declarations: [
        ColumnListComponent
    ],
    providers: [
        ColumnService
    ],
    exports: [
        ColumnListComponent
    ]
})

export class ColumnListModule {
}