import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {CardComponent} from './card.component';
import {CardService} from "./card.service";
import {CardListModule} from "./card-list/card-list.module";
import {DragulaModule} from "ng2-dragula";

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        CardListModule,
        DragulaModule
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
