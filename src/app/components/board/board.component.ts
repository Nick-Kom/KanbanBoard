import {Component, Input} from '@angular/core';
import {Board} from "./board";
import {BoardService} from "./board.service";

const BOARDS: Board[] = [
    {
        id: 1,
        title: "Board for work"
    },
    {
        id: 2,
        title: "Board for study"
    }
];

@Component({
    selector: 'board',
    templateUrl: 'board.template.html',
    styleUrls: ['board.less', '../../styles/btn.less']
})
export class BoardComponent {
    boards: Board[];

    constructor(private boardService: BoardService) {

    }

    ngOnInit() {
        this.boards = BOARDS;
    }

    createBoard() {
        let board = new Board(new Date().valueOf(), '');
        this.boards.push(board);
    }
}