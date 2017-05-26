import {Injectable} from '@angular/core';
import {Card} from "./card";
import {CARDS, TODOS} from "../mocks";
import {Todo} from "../todo/todo";

@Injectable()
export class CardService {
    private dataCards: Card[] = CARDS;

    getDataCard(): Card[] {
        return this.dataCards;
    }

    createCard(card: Card) {
        this.dataCards.push(card);
        console.log(this.dataCards)
    }

    deletCard(card: Card) {
        let indexToRemove = this.dataCards.indexOf(card);
        if (indexToRemove > -1) {
            this.dataCards.splice(indexToRemove, 1);
        }
    }


}