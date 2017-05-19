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
        this.dataBoards.push(board);
        console.log(this.dataBoards)
    }
}