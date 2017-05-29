import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdDialog} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Card} from "../card";
import {CardService} from "../card.service";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {DragulaService} from "ng2-dragula";
import {Todo} from "../../todo/todo";
import {TodoService} from "../../todo/todo.service";

@Component({
    selector: 'card-item',
    templateUrl: 'card-item.template.html',
    styleUrls: ['card-item.less']
})
export class CardItemComponent {
    @Input() card: Card;
    @Output() onDeleteCard = new EventEmitter;
    cardTitle: boolean = false;
    cardDescription: boolean = false;
    cardDatesTimes: boolean = false;
    showDates: boolean = true;
    dateNow: Date = new Date();
    dateForm: FormGroup;
    titleForm: FormGroup;
    descriptionForm: FormGroup;
    minDate: string = this.currentDate();
    estimatedTime: number;
    spentTime: number;
    remainingTime: number;
    firstDate: Date;
    lastDate: Date;
    cardTodos: Todo[] = [];
    cardCompletedChecks: Todo[] = [];

    constructor(private dialog: MdDialog,
                private cardService: CardService,
                private todoService: TodoService,
                private formBuilder: FormBuilder,
                private dragulaService: DragulaService) {
    }


    ngOnInit() {
        this.todoService.getTodos().subscribe(todos => {
            this.cardTodos = todos.filter(obj => obj.cardId === this.card.id);
            this.cardCompletedChecks = this.cardTodos.filter(obj => obj.completed === true);
        });

        this.firstDate = new Date(this.card.startDate);
        this.lastDate = new Date(this.card.dueDate);

        this.card.estimated = this.setEstimatedTime(this.firstDate, this.lastDate);
        this.card.spent = this.setSpentTime(this.dateNow, this.firstDate);
        this.card.remaining = this.setRemainingTime(this.dateNow, this.lastDate);

        this.dateForm = this.formBuilder.group({
            startDate: ['', [Validators.required]],
            dueDate: ['', [Validators.required]]
        });

        this.titleForm = this.formBuilder.group({
            title: [this.card ? this.card.title : '', [Validators.required]]
        });
        this.descriptionForm = this.formBuilder.group({
            description: [this.card ? this.card.description : '', [Validators.required]]
        });
    }

    currentDate(): string {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        return yyyy + '-' + dd + '-' + mm;
    }

    changeCardTitle() {
        this.cardTitle = true;
    }

    changeCardDatesTimes() {
        this.cardDatesTimes = true;

    }

    changeCardDescription() {
        this.cardDescription = true;
    }

    showCardDatesTimes() {
        this.cardDatesTimes = true;
    }

    saveCardTitle() {
        let obj: Object = {
            id: this.card.id,
            title: this.titleForm.value.title
        };
        this.cardService.changeCardTitle(this.card, obj)
            .subscribe(
                res => {
                    this.card.title = this.titleForm.value.title;
                    this.cardTitle = false;
                }
            );

    }

    saveCardDescription() {
        let obj: Object = {
            id: this.card.id,
            description: this.titleForm.value.description
        };
        this.cardService.changeCardDescription(this.card, obj)
            .subscribe(
                res => {
                    this.card.description = this.descriptionForm.value.description;
                    this.cardDescription = false;
                }
            );
    }

    clearCardTitle() {
        this.cardTitle = false;
    }

    clearCardDescription() {
        this.cardDescription = false;
    }

    clearCardDatesTimes() {
        this.cardDatesTimes = false;
    }

    saveCardDatesTimes() {
        console.log(this.dateForm.value);

        this.card.startDate = this.dateForm.value.startDate;
        this.card.dueDate = this.dateForm.value.dueDate;

        let startDate = new Date(this.card.startDate);
        let dueDate = new Date(this.card.dueDate);

        let obj: Object = {
            id: this.card.id,
            estimated : this.setEstimatedTime(startDate, dueDate),
            spent : this.setSpentTime(this.dateNow, startDate),
            remaining : this.setRemainingTime(this.dateNow, dueDate)
        };
        this.cardService.changeCardDatesTimes(this.card, obj)
            .subscribe(
                res => {
                    this.card.estimated = this.setEstimatedTime(startDate, dueDate);
                    this.card.spent = this.setSpentTime(this.dateNow, startDate);
                    this.card.remaining = this.setRemainingTime(this.dateNow, dueDate);
                    this.cardDatesTimes = false;
                }
            );


    }

    setEstimatedTime(firstDate: Date, dueDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000;
        if (firstDate.getTime() >= dueDate.getTime()) {
            this.estimatedTime = 0
        }
        else {
            this.estimatedTime = Math
                .round(Math.abs((firstDate.getTime() - dueDate.getTime()) / (oneDay)));
            return this.estimatedTime;
        }
    }

    setSpentTime(dateNow: Date, firstDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000;
        this.spentTime = Math
            .round(Math.abs((dateNow.getTime() - firstDate.getTime()) / (oneDay)));

        if (this.estimatedTime < this.spentTime) {
            this.spentTime = this.estimatedTime
        }

        return this.spentTime;

    }

    setRemainingTime(dateNow: Date, dueDate: Date) {
        if (dueDate.getTime() < dateNow.getTime()) {
            this.remainingTime = 0
        }
        else {

            let oneDay = 24 * 60 * 60 * 1000;
            this.remainingTime = Math
                .round(Math.abs((dueDate.getTime() - dateNow.getTime()) / (oneDay)));
            return this.remainingTime
        }
    }

    deleteCard(card: Card) {
        this.onDeleteCard.emit(card);
    }

    openDialog() {
        let dialogRef = this.dialog.open(AlertConfirmDeleting);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res.delete) {
                this.deleteCard(this.card)
            }
        })
    }

}