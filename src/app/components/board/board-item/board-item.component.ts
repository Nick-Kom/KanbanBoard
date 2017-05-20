import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Board} from "../board"
import {MdDialog} from '@angular/material';
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";

@Component({
    selector: 'board-item',
    templateUrl: 'board-item.template.html',
    styleUrls: ['board-item.less']
})
export class BoardItemComponent {
    @Input() board: Board;
    @Output() onDeleteBoard = new EventEmitter;
    changeTitle: boolean = true;

    constructor(private dialog: MdDialog,) {
    }

    changeBoardTitle() {
        this.changeTitle = false;
    }

    saveBoardTitle() {

    }

    deleteBoard(board: Board) {
        this.onDeleteBoard.emit(board);
    }

    openDialog() {
        let dialogRef = this.dialog.open(AlertConfirmDeleting);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res.delete) {
                this.deleteBoard(this.board)
            }
        })
    }

}