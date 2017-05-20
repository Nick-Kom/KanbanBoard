import {Component, Input} from '@angular/core';
import {Board} from "../board";

@Component({
    selector: 'board-item',
    templateUrl: 'board-item.template.html',
    styleUrls: ['board-item.less']
})
export class BoardItemComponent {
    @Input() board: Board;
    changeTitle: boolean=true;

    changeBoardTitle() {
        this.changeTitle=false;
    }

}