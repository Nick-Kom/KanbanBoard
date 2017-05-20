import {Component, Input} from '@angular/core';
import {CardService} from "./card.service";
import {Column} from "../column/column";
import {Card} from "./card";

@Component({
    selector: 'card',
    templateUrl: 'card.template.html',
    styleUrls: ['card.less']
})
export class CardComponent {
    @Input() column: Column;
    cards: Card[];

    constructor(private cardService: CardService) {
    }

    ngOnInit() {
        this.cards = this.cardService.getDataCard().filter(obj => obj.columnId === this.column.id);
    }

    createCard() {
        let newCard = new Card(new Date().valueOf(), '', this.column.id);
        this.cards.push(newCard);
        this.cardService.createCard(newCard);
    }
}