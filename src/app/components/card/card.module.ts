import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {CardComponent} from './card.component';

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule
    ],
    declarations: [
        CardComponent
    ],
/*    providers: [
        BoardService
    ],*/
    exports: [
        CardComponent
    ]
})

export class CardModule { }
