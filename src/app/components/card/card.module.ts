import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {CardComponent} from './card.component';
import {CardService} from "./card.service";
import {CardListModule} from "./card-list/card-list.module";

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        CardListModule
    ],
    declarations: [
        CardComponent
    ],
    providers: [
        CardService
    ],
    exports: [
        CardComponent
    ]
})

export class CardModule { }
