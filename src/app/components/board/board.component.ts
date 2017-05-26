import {Component} from '@angular/core';
import {Board} from "./board";
import {BoardService} from "./board.service";
import {MdDialog} from "@angular/material";
import {AlertConfirmDeleting} from "../modal/alert-confirm/alert-confirm-deleting";


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

    deleteBoard(board: Board) {
        this.boardService.deleteBoard(board);
    }

}