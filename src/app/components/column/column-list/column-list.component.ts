import {Component, Input} from '@angular/core';
import {Column} from "../column";
import {ColumnService} from "../column.service";

@Component({
    selector: 'column-list',
    templateUrl: 'column-list.template.html',
    styleUrls: ['column-list.less', '../../../styles/btn.less']
})
export class ColumnListComponent {

    @Input() columns: Column[]

    constructor(private columnService: ColumnService) {
    }

    createColumn() {
        let column = new Column(new Date().valueOf(), '');
        this.columnService.createColumn(column);
    }

}