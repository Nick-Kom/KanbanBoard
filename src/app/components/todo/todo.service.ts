import {Injectable} from '@angular/core';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Todo} from './todo';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {TODOS} from "../mocks";


@Injectable()
export class TodoService {
    private dataTodos: Todo[] = TODOS;


    constructor(private  http: Http) {
    }

    getTodos():  Todo[] {
        return this.dataTodos;
    }

    createTodo(title: string) {

    }

    deleteTodo(todo: Todo) {

    }

    toggleTodo(todo: Todo) {

    }

}