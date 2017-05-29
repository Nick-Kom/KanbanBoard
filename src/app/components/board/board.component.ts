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
        this.boardService.getDataBoards()
            .subscribe((boards: Board[]) => {
            this.boards = boards
        });
    }

    createBoard() {
        let board = new Board(new Date().valueOf(), '');
        this.boardService.createBoard(board).subscribe(
            res => this.boards.unshift(board)
        )
    }

    deleteBoard(board: Board) {
        this.boardService.deleteBoard(board).subscribe(res => {
            this.boards = this.boards.filter(item => item.id !== board.id)
        });
    }

}