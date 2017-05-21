import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Column} from "../column";
import {MdDialog} from '@angular/material';
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";

@Component({
    selector: 'column-item',
    templateUrl: 'column-item.template.html',
    styleUrls: ['column-item.less']
})
export class ColumnItemComponent {
    @Input() column: Column;
    @Output() onDeleteColumn = new EventEmitter;
    changeColumn: boolean = false;

    constructor(private dialog: MdDialog,) {
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