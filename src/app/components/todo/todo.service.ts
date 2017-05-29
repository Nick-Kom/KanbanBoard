import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Todo} from './todo';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';

    constructor(private  http: Http) {
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    headersOptions() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        return options

    }

    createTodo(todo: Todo) {
        return this.http.post(this.apiUrl, todo, this.headersOptions())
            .map(res => res.json().data as Todo)
            .catch(this.handleError)
    }

    deleteTodo(todo: Todo) {
        let url = `${this.apiUrl}/${todo.id}`;
        return this.http.delete(url, this.headersOptions())
            .map((data: any) => {
                console.log(data)
            })
            .catch(this.handleError);

    }

    toggleTodo(todo: Todo) {
        let url = `${this.apiUrl}/${todo.id}`;
        return this.http.put(url, todo, this.headersOptions())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('Error occured', error);
        return Observable.throw(error.message || error);
    }


}