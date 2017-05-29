import {Injectable} from '@angular/core';
import {Column} from "./column";
import {COLUMNS} from "../mocks";
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ColumnService {

    private apiUrlColumns = 'api/columns';

    constructor(private  http: Http) {
    }

    getDataColumns(): Observable<Column[]> {
        return this.http.get(this.apiUrlColumns)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    headersOptions() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        return options

    }

    createColumn(column: Column) {

        return this.http.post(this.apiUrlColumns, column, this.headersOptions())
            .map(res => {
                res.json().data as Column;
                console.log(res.json().data)
            })
            .catch(this.handleError)
    }

    changeColumnTitle(column:Column){
        let url = `${this.apiUrlColumns}/${column.id}`;
        return this.http.put(url, column, this.headersOptions())
            .map((data: any) => {
            })
            .catch(this.handleError);
    }

    deleteColumn(column: Column) {
        let url = `${this.apiUrlColumns}/${column.id}`;

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