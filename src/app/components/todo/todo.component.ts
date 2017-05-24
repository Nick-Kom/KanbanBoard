import {Component, Input, OnInit} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service'
import {Card} from "../card/card";

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
    @Input() card: Card;
    todos: Todo[];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos().filter(obj => obj.cardId === this.card.id);
        console.log(this.todos);
    }

    create(title: string) {
        let todo = new Todo(new Date().valueOf(), title, false, this.card.id);
        this.todos.push(todo);
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    } ;

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }
}