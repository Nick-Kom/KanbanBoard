import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {HttpModule } from "@angular/http"

import {TodoService} from "./todo.service";
import {TodoComponent} from "./todo.component";
import {TodoListModule} from "./todo-list/todo-list.module";
import {TodoFormModule} from "./todo-form/todo-form.module";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../shared/data.service";


@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
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
