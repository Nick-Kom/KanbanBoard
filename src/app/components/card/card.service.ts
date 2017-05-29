import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Card} from "./card";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CardService {
    private apiUrlCards = 'api/cards';

    constructor(private  http: Http) {
    }


    getDataCard(): Observable<Card[]> {
        return this.http.get(this.apiUrlCards)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    headersOptions() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        return options

    }

    createCard(card: Card) {
        return this.http.post(this.apiUrlCards, card, this.headersOptions())
            .map(res => {
                res.json().data as Card;
                console.log(res.json().data)
            })
            .catch(this.handleError)
    }

    changeCardTitle(card:Card,obj:Object){
        let url = `${this.apiUrlCards}/${card.id}`;
        return this.http.put(url, obj, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);
    }

    changeCardDescription(card:Card,obj:Object){
        let url = `${this.apiUrlCards}/${card.id}`;
        return this.http.put(url, obj, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);
    }
    changeCardDatesTimes(card:Card,obj:Object){
        let url = `${this.apiUrlCards}/${card.id}`;
        return this.http.put(url, obj, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);
    }

    deletCard(card: Card) {
        let url = `${this.apiUrlCards}/${card.id}`;
        return this.http.delete(url, this.headersOptions())
            .map((data: any) => {
                console.log(data)
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('Error occured', error);
        return Observable.throw(error.message || error);
    }

}