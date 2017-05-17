import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {BoardModule} from './components/board/board.module';
import {MaterialModule} from "@angular/material";

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