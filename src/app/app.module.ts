import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from "@angular/material";
import {AppComponent} from './app.component';
import {BoardModule} from './components/board/board.module';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        BoardModule,
        MaterialModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}