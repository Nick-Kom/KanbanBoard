import {Component, Input} from '@angular/core';
import {Board} from "../board";
import {Column} from "../../column/column";

@Component({
    selector: 'board-item',
    templateUrl: 'board-item.template.html',
    styleUrls: ['board-item.less']
})
export class BoardItemComponent  {
    @Input() board: Board;
}