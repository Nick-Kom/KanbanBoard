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
    @Output() onSaveCard = new EventEmitter;
    @Output() onDeleteCard = new EventEmitter;
    newCard: boolean = false;

    constructor(private cardService: CardService) {
    }

    createCard() {
        this.newCard = true;
    }

    saveCardTitle() {
        this.newCard = false;
        this.onSaveCard.emit();
    }

    clearCardTitle() {
        this.newCard = false;
    }

    deleteCard(card: Card) {
        this.onDeleteCard.emit(card);
    }

}