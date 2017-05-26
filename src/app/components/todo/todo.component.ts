import {Component, Input, OnInit} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service'
import {Card} from "../card/card";

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent {
    @Input() card: Card;
    todos: Todo[];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos().filter(obj => obj.cardId === this.card.id);
    }

    create(title: string) {
        let todo = new Todo(new Date().valueOf(), title, false, this.card.id);
        this.todoService.createTodo(todo);
        this.todos.push(todo);

    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    } ;

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }
}