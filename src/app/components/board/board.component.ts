import {Component} from '@angular/core';
import {Board} from "./board";
import {BoardService} from "./board.service";


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
        this.boards = this.boardService.getDataBoards();
    }

    createBoard() {
        let board = new Board(new Date().valueOf(), '');
        this.boardService.createBoard(board);
    }
}