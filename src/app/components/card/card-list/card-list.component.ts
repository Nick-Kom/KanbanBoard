import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../card";
import {CardService} from "../card.service";

@Component({
    selector: 'card-list',
    templateUrl: 'card-list.template.html',
    styleUrls: ['card-list.less']
})
export class CardListComponent {

    @Input() cards: Card[];
    @Output() onCreateCard = new EventEmitter;

    constructor(private cardService: CardService) { }

    createCard() {
        this.onCreateCard.emit();
    }

    clearCardTitle(card: Card) {
        this.cards =   this.cards.filter(item => item.id !== card.id);
         this.cardService.clearCard(card);
    }

}