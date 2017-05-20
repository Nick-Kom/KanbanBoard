import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Column} from "../column";

@Component({
    selector: 'column-item',
    templateUrl: 'column-item.template.html',
    styleUrls: ['column-item.less']
})
export class ColumnItemComponent {
    @Input() column: Column
    @Output() onDeleteColumn = new EventEmitter;
    changeColumn: boolean = false;

    changeColumnTitle() {
        this.changeColumn = true;
    }

    clearCardTitle() {
        this.changeColumn = false;
    }

    deleteColumn(column: Column) {
        this.onDeleteColumn.emit(column);
    }

}