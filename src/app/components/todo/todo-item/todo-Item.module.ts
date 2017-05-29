import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {TodoService} from "../todo.service";
import {TodoItemComponent} from "./todo-item.component";


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [
        TodoItemComponent
    ],
    providers: [
        TodoService
    ],
    exports: [
        TodoItemComponent
    ]
})

export class TodoItemModule {
}
