import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Column} from "../column";

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

    showCreateColumn() {
        this.newColumn = true;
    }

    createColumnTitle() {
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