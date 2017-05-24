import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdDialog} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Card} from "../card";
import {CardService} from "../card.service";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";

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
    showTodos: boolean = false;
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


    constructor(private dialog: MdDialog,
                private cardService: CardService,
                private formBuilder: FormBuilder) {
    }


    ngOnInit() {
        this.firstDate = new Date(this.card.startDate);
        this.lastDate = new Date(this.card.dueDate);
        this.estimatedTime = this.setEstimatedTime(this.firstDate, this.lastDate);
        this.spentTime = this.setSpentTime(this.dateNow, this.firstDate);
        this.remainingTime = this.setRemainingTime(this.dateNow, this.lastDate);

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

    showCardTodos() {
        this.showTodos = true;
    }

    saveCardTitle() {
        this.card.title = this.titleForm.value.title;
        this.cardTitle = false;

    }

    saveCardDescription() {
        this.card.description = this.descriptionForm.value.description;
        this.cardDescription = false;
        console.log(this.card.description)
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
        this.cardDatesTimes = false;
        console.log(this.dateForm.value);
        this.card.startDate = this.dateForm.value.startDate;
        this.card.dueDate = this.dateForm.value.dueDate;

        let startDate = new Date(this.card.startDate);
        let dueDate = new Date(this.card.dueDate);

        this.setEstimatedTime(startDate, dueDate);
        this.setSpentTime(this.dateNow, startDate);
        this.setRemainingTime(this.dateNow, dueDate);

    }

    setEstimatedTime(firstDate: Date, dueDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000;
        if (firstDate.getTime() >= dueDate.getTime()) {
            this.estimatedTime = 0
        }
        else {
            this.estimatedTime = Math.round(Math.abs((firstDate.getTime() - dueDate.getTime()) / (oneDay)));
            return this.estimatedTime;
        }
    }

    setSpentTime(dateNow: Date, firstDate: Date) {
        let oneDay = 24 * 60 * 60 * 1000;
        this.spentTime = Math.round(Math.abs((dateNow.getTime() - firstDate.getTime()) / (oneDay)));

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
            this.remainingTime = Math.round(Math.abs((dueDate.getTime() - dateNow.getTime()) / (oneDay)));
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