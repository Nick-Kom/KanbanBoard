import {Injectable} from '@angular/core';
import {Card} from "./card";
import {CARDS} from "../mocks";

@Injectable()
export class CardService {
    private dataCards: Card[] = CARDS;
    private card: Card

    getDataCard(): Card[] {
        return this.dataCards;
    }

    createCard(card: Card) {
        this.dataCards.push(card);
        console.log(this.dataCards)
    }
    deletCard(card:Card){
        let indexToRemove = this.dataCards.indexOf(card);
        this.dataCards.splice(indexToRemove, 1);
    }

}