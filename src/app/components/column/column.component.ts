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
    columns: Column[] = [];

    constructor(private columnService: ColumnService) {

    }

    ngOnInit() {
        this.columnService.getDataColumns()
            .subscribe((columns: Column[]) => {
                this.columns = columns.filter(obj => obj.boardId === this.board.id);
            });
    }

    createColumn(title: string) {
        let newColumn = new Column(new Date().valueOf(), title, this.board.id);
        this.columnService.createColumn(newColumn).subscribe(
            res => this.columns.push(newColumn)
        );
    }

    deleteColumn(column: Column) {
        this.columnService.deleteColumn(column).subscribe(res => {
            this.columns = this.columns.filter(item => item.id !== column.id)
        });
    }

}