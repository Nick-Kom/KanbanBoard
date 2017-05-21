import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../card";
import {MdDialog} from "@angular/material";
import {CardService} from "../card.service";

@Component({
    selector: 'card-item',
    templateUrl: 'card-item.template.html',
    styleUrls: ['card-item.less']
})
export class CardItemComponent {
    @Input() card: Card;
    hiddenCardAdditionally:boolean = false;

    constructor(private dialog: MdDialog,
                private cardService: CardService ) {
    }


}