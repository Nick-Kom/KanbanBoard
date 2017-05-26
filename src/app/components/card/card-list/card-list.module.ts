import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {CardListComponent} from "./card-list.component";
import {CardItemModule} from "../card-item/card-item.module";
import {CardService} from "../card.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragulaModule} from "ng2-dragula";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        CardItemModule,
        MaterialModule,
        BrowserAnimationsModule,
        DragulaModule,
        ReactiveFormsModule
    ],
    declarations: [
        CardListComponent
    ],
    providers: [
        CardService
    ],
    exports: [
        CardListComponent
    ]
})

export class CardListModule {
}