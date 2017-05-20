import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {CardItemComponent} from "./card-item.component";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule
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