import {Component, Input} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service'
import {Card} from "../card/card";

@Component({
    selector: 'todo',
    templateUrl: 'todo.template.html'
})
export class TodoComponent {
    @Input() card: Card;
    todos: Todo[]  = [];

    constructor(private todoService: TodoService) {
    }

    ngOnInit() {
        this.todoService.getTodos().subscribe((todos:Todo[]) => {
            this.todos = todos.filter(obj => obj.cardId === this.card.id)
        });
    }

    create(title: string) {
        let todo = new Todo(new Date().valueOf(), title, false, this.card.id);
        this.todoService.createTodo(todo).subscribe(
            todo => this.todos.push(todo)
        );
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo).subscribe(res => {
            this.todos = this.todos.filter(item => item.id !== todo.id)
        });
    } ;

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo).subscribe(res => {
            todo.completed = !todo.completed;
        });
    }
}