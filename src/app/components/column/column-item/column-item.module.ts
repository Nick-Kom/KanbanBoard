import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";
import {ColumnItemComponent} from "./column-item.component";
import {CardModule} from "../../card/card.module";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {DragulaModule} from "ng2-dragula";


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        CardModule,
        ReactiveFormsModule,
        DragulaModule
    ],
    declarations: [
        ColumnItemComponent
    ],
    entryComponents: [
        AlertConfirmDeleting
    ],
    exports: [
        ColumnItemComponent
    ]
})

export class ColumnItemModule {
}