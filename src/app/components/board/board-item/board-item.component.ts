import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Board} from "../board"
import {MdDialog} from '@angular/material';
import {AlertConfirmDeleting} from "../../modal/alert-confirm/alert-confirm-deleting";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'board-item',
    templateUrl: 'board-item.template.html',
    styleUrls: ['board-item.less']
})
export class BoardItemComponent {
    @Input() board: Board;
    @Output() onDeleteBoard = new EventEmitter;
    changeTitle: boolean = true;
    titleForm:FormGroup

    constructor(private dialog: MdDialog,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.titleForm = this.formBuilder.group({
            title: [this.board ? this.board.title : '', [Validators.required]]
        });
    }

    changeBoardTitle() {
        this.changeTitle = false;
    }

    saveBoardTitle() {
        this.board.title = this.titleForm.value.title;
        this.changeTitle = true;
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