import {Injectable} from '@angular/core';
import {Board} from "./board";
import {BOARDS} from "../mocks";

@Injectable()
export class BoardService {
    private dataBoards: Board[] = BOARDS;

    getDataBoards(): Board[] {
        return this.dataBoards;
    }
    createBoard(board: Board) {
        this.dataBoards.unshift(board);
        console.log(this.dataBoards)
    }
    deleteBoard(board: Board) {
        let indexToRemove = this.dataBoards.indexOf(board);
        if (indexToRemove > -1) {
            this.dataBoards.splice(indexToRemove, 1);
        }
        console.log(this.dataBoards)
    }
}