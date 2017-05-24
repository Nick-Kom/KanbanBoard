import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {CardItemComponent} from "./card-item.component";
import {MomentModule} from "angular2-moment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Md2DatepickerModule} from "md2-datepicker";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        MomentModule,
        FormsModule,
        ReactiveFormsModule,
        Md2DatepickerModule.forRoot()
    ],
    entryComponents: [
        AlertConfirmDeleting
    ],
    declarations: [
        CardItemComponent
    ],
    exports: [
        CardItemComponent
    ]
})

export class CardItemModule {
}