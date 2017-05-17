import {Component} from '@angular/core';
import {Column} from "./column";
import {ColumnService} from "./column.service";




@Component({
    selector: 'column',
    templateUrl: 'column.template.html',
    styleUrls: ['column.less']
})
export class ColumnComponent {
    columns: Column[];

    constructor(private columnService: ColumnService) {
    }

    ngOnInit() {
        this.columns =  this.columnService.getDataColumns();
    }


}