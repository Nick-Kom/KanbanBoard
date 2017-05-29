import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Card} from "../card";
import {CardService} from "../card.service";
import {DragulaService} from "ng2-dragula";


@Component({
    selector: 'card-list',
    templateUrl: 'card-list.template.html',
    styleUrls: ['card-list.less']
})
export class CardListComponent {
    @Input() cards: Card[];
    @Output() onSaveCard = new EventEmitter;
    @Output() onDeleteCard = new EventEmitter;
    newCard: boolean = false;
    private titleForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private dragulaService:DragulaService) {
        dragulaService.dropModel.subscribe((value:any) => {
            this.onDropModel(value.slice(1));
        });
        dragulaService.removeModel.subscribe((value:any) => {
            this.onRemoveModel(value.slice(1));
        });
    }

    private onDropModel(args:any):void {
        let [el, target, source] = args;
        console.log('onDropModel:');
        console.log(el);
        console.log(target);
        console.log(source);
    }

    private onRemoveModel(args:any):void {
        let [el, source] = args;
        console.log('onRemoveModel:');
        console.log(el);
        console.log(source);
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }

    createCard() {
        this.newCard = true;
    }

    saveCardTitle() {
        this.newCard = false;
        this.onSaveCard.emit(this.titleForm.value.title);
    }

    clearCardTitle() {
        this.newCard = false;
    }

    deleteCard(card: Card) {
        this.onDeleteCard.emit(card);
    }

}