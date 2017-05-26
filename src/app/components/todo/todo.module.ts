import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {TodoService} from "./todo.service";
import {TodoComponent} from "./todo.component";
import {TodoListModule} from "./todo-list/todo-list.module";
import {TodoFormModule} from "./todo-form/todo-form.module";

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        TodoListModule,
        TodoFormModule
    ],
    declarations: [
        TodoComponent
    ],
    providers: [
        TodoService
    ],
    exports: [
        TodoComponent
    ]
})

export class TodoModule {
}
