import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Column} from "../column";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'column-list',
    templateUrl: 'column-list.template.html',
    styleUrls: ['column-list.less', '../../../styles/btn.less']
})
export class ColumnListComponent {
    @Input() columns: Column[];
    @Output() onSaveColumn = new EventEmitter;
    @Output() onDeleteColumn = new EventEmitter;
    newColumn: boolean = false;
    titleForm: FormGroup

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: ['', [Validators.required]]
        });
    }

    createColumn() {
        this.newColumn = true;
    }

    saveColumnTitle() {
        this.newColumn = false;
        this.onSaveColumn.emit(this.titleForm.value.title);
    }

    clearCardTitle() {
        this.newColumn = false;
    }

    deleteColumn(column: Column) {
        this.onDeleteColumn.emit(column);
    }


}