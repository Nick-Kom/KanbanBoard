import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BoardListComponent} from "./board-list.component";
import {BoardItemModule} from "../board-item/board-item.module";


@NgModule({
    imports: [
        BrowserModule,
        BoardItemModule
    ],
    declarations: [
        BoardListComponent
    ],
    exports: [
        BoardListComponent
    ]
})

export class BoardListModule {
}