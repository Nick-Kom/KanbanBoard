import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Column} from "../column";
import {ColumnService} from "../column.service";
import {Board} from "../../board/board";

@Component({
    selector: 'column-list',
    templateUrl: 'column-list.template.html',
    styleUrls: ['column-list.less', '../../../styles/btn.less']
})
export class ColumnListComponent {

    @Input()columns: Column[];
    @Output() onCreateColumn = new EventEmitter;

    createColumn() {
        this.onCreateColumn.emit();
    }


}