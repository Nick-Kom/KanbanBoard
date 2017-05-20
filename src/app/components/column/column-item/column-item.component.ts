import {Component, Input} from '@angular/core';
import {Column} from "../column";

@Component({
    selector: 'column-item',
    templateUrl: 'column-item.template.html',
    styleUrls: ['column-item.less']
})
export class ColumnItemComponent  {
    @Input() column: Column

    changeColumnTitle(){

    }
}