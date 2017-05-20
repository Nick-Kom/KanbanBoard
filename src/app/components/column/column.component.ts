import {Component, Input} from '@angular/core';
import {Column} from "./column";
import {ColumnService} from "./column.service";
import {Board} from "../board/board";

@Component({
    selector: 'column',
    templateUrl: 'column.template.html',
    styleUrls: ['column.less']
})
export class ColumnComponent {
    @Input() board: Board;
    columns: Column[];

    constructor(private columnService: ColumnService) {
    }

    ngOnInit() {
        this.columns = this.columnService.getDataColumns().filter(obj => obj.boardId === this.board.id);
    }

    createColumn() {
        let newColumn = new Column(new Date().valueOf(), '', this.board.id);
        this.columns.push(newColumn)
        this.columnService.createColumn(newColumn);

    }

}