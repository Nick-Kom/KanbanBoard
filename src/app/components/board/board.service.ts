import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Board} from "./board";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class BoardService {
    private apiUrlBoards = 'api/boards';

    constructor(private  http: Http) {
    }

    getDataBoards(): Observable<Board[]> {
        return this.http.get(this.apiUrlBoards)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    headersOptions() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        return options
    }

    createBoard(board: Board) {
        return this.http.post(this.apiUrlBoards, board, this.headersOptions())
            .map(res => {
                res.json().data as Board;
                console.log(res.json().data)
            })
            .catch(this.handleError)
    }

    changeBoardTitle(board: Board) {
        let url = `${this.apiUrlBoards}/${board.id}`;
        return this.http.put(url, board, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);

    }

    deleteBoard(board: Board) {
        let url = `${this.apiUrlBoards}/${board.id}`;

        return this.http.delete(url, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);

    }

    private handleError(error: any) {
        console.error('Error occured', error);
        return Observable.throw(error.message || error);
    }
}