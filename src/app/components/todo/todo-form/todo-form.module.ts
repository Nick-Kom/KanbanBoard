import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {TodoService} from "../todo.service";
import {TodoFormComponent} from "./todo-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
        TodoFormComponent
    ],
    providers: [
        TodoService
    ],
    exports: [
        TodoFormComponent
    ]
})

export class TodoFormModule {
}
