import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../card";
import {CardService} from "../card.service";
import {DragulaService} from "ng2-dragula";

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