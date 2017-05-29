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
    cards: Card[] = [];
    sumEstimatedTime: Object = [];
    sumRemainingTime: Object = [];

    constructor(private cardService: CardService) {
    }

    ngOnInit() {
        this.cardService.getDataCard().subscribe((cards: Card[]) => {
            this.cards = cards.filter(obj => obj.columnId === this.column.id);

            this.sumEstimatedTime = this.cards
                .reduce((a: Card, b: Card): any => ({
                    estimated: a.estimated + b.estimated
                }), {estimated: 0});

            this.sumRemainingTime = this.cards
                .reduce((a: Card, b: Card): any => ({
                    remaining: a.remaining + b.remaining
                }), {remaining: 0});

        });

    }

    saveCardTitle(title: string) {
        let newCard = new Card(
            new Date().valueOf(), title, this.column.id, '', '', '', 0, 0, 0
        );

        this.cardService.createCard(newCard).subscribe(
            res => this.cards.push(newCard)
        );
        console.log(this.cards)
    }

    deleteCard(card: Card) {
        this.cardService.deletCard(card).subscribe(res => {
            this.cards = this.cards.filter(item => item.id !== card.id)
        });
    }
}