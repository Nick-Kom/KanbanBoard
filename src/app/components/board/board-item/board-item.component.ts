import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Board} from "../board"
import {MdDialog} from '@angular/material';
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BoardService} from "../board.service";

@Component({
    selector: 'board-item',
    templateUrl: 'board-item.template.html',
    styleUrls: ['board-item.less', '../../../styles/alert.less']
})
export class BoardItemComponent {
    @Input() board: Board;
    @Output() onDeleteBoard = new EventEmitter;
    changeTitle: boolean = true;
    titleForm: FormGroup

    constructor(private dialog: MdDialog,
                private formBuilder: FormBuilder,
                private boardService: BoardService) {
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: [this.board ? this.board.title : '',
                [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(40)
                ]]
        });
    }

    editBoardTitle() {
        this.changeTitle = false;
    }

    saveBoardTitle() {
        let obj: Board = {
            id: this.board.id,
            title: this.titleForm.value.title
        };
        this.boardService.changeBoardTitle(obj)
            .subscribe(
                res => {
                    this.board.title = this.titleForm.value.title;
                    this.changeTitle = true;
                }
            );
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