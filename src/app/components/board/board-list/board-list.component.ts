import {Component,Input} from '@angular/core';
import {Board} from "../board";

@Component({
    selector: 'board-list',
    templateUrl: 'board-list.template.html',
    styleUrls: ['board-list.less']
})
export class BoardListComponent  {
    @Input() boards:Board[];
}