import {Component, EventEmitter, Input, Output} from '@angular/core';
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

    createColumn() {
        this.newColumn = true;
    }

    saveColumn() {
        this.newColumn = false;
        this.onSaveColumn.emit();
    }

    clearCardTitle() {
        this.newColumn = false;
    }

    deleteColumn(column: Column) {
        this.onDeleteColumn.emit(column);
    }


}