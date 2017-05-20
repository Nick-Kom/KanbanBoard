import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../card";

@Component({
    selector: 'card-item',
    templateUrl: 'card-item.template.html',
    styleUrls: ['card-item.less']
})
export class CardItemComponent {
    @Input() card: Card

    @Output() onClearCard = new EventEmitter;

    clearCardTitle(card:Card) {
        this.onClearCard.emit(card);
    }

    saveCardTitle() {

    }

}