import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Column} from "../column";
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {ColumnService} from "../column.service";

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
                private formBuilder: FormBuilder,
                private columnService: ColumnService) {
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: [this.column ? this.column.title : '', [Validators.required]]
        });
    }

    changeColumnTitle() {
        let obj: Column = {
            id: this.column.id,
            title: this.titleForm.value.title,
            boardId: this.column.boardId
        };
        this.columnService.changeColumnTitle(obj)
            .subscribe(
                res => {
                    this.column.title = this.titleForm.value.title;
                    this.changeColumn = false;
                }
            );
    }

    editColumnTitle() {
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