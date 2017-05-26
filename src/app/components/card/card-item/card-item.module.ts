import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {CardItemComponent} from "./card-item.component";
import {MomentModule} from "angular2-moment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Md2DatepickerModule} from "md2-datepicker";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {TodoModule} from "../../todo/todo.module";
import {TodoFormModule} from "../../todo/todo-form/todo-form.module";
import {DragulaModule} from "ng2-dragula";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        MomentModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        Md2DatepickerModule.forRoot(),
        TodoModule,
        DragulaModule
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