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
    clearCard(card:Card){
        this.dataCards.filter(item => item.id !== card.id);

    }

    getCard() {
        return this.card
    }

    CardId(card:Card){
     this.card = card
    }

}