import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from "@angular/material";
import {HttpModule} from "@angular/http";
import {CardComponent} from './card.component';
import {CardService} from "./card.service";
import {CardListModule} from "./card-list/card-list.module";
import {DragulaModule} from "ng2-dragula";
import {InMemoryDataService} from "../../shared/data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        CardListModule,
        DragulaModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
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

export class CardModule {
}
