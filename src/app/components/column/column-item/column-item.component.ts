import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Column} from "../column";
import {MdDialog} from '@angular/material';
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'column-item',
    templateUrl: 'column-item.template.html',
    styleUrls: ['column-item.less']
})
export class ColumnItemComponent {
    @Input() column: Column;
    @Output() onDeleteColumn = new EventEmitter;
    changeColumn: boolean = false;
    titleForm: FormGroup;

    constructor(private dialog: MdDialog,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: [this.column ? this.column.title : '', [Validators.required]]
        });
    }

    saveColumnTitle() {
        this.column.title = this.titleForm.value.title;
        this.changeColumn = false;
    }

    changeColumnTitle() {
        this.changeColumn = true;
    }

    clearCardTitle() {
        this.changeColumn = false;
    }

    deleteColumn(column: Column) {
        this.onDeleteColumn.emit(column);
    }

    openDialog() {
        let dialogRef = this.dialog.open(AlertConfirmDeleting);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res.delete) {
                this.deleteColumn(this.column)
            }
        })
    }

}