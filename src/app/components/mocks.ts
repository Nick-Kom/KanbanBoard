import {Column} from "./column/column";
import {Board} from "./board/board";
import {Card} from "./card/card";

export const BOARDS: Board[] = [
    {
        id: 1,
        title: "Board for work"
    },
    {
        id: 2,
        title: "Board for study"
    }
];

export const COLUMNS: Column[] = [
    {
        id: 1,
        title: "Plan",
        boardId: 1
    },
    {
        id: 2,
        title: "Doing",
        boardId: 1
    },
    {
        id: 3,
        title: "Done",
        boardId: 1
    },
    {
        id: 4,
        title: "Done",
        boardId: 1
    },
    {
        id: 5,
        title: "Doing",
        boardId: 2
    },
    {
        id: 6,
        title: "Done",
        boardId: 2
    }
];

export const CARDS: Card[] = [
    {
        id: 1,
        title: "Lorem  sdsad swewsadf sdfsfd",
        columnId: 1
    },
    {
        id: 2,
        title: "Lorem  sdsad wweewwww  sdfsfddffffffffffffffffffffffffffffffffffffffffffffffffffsdfsdfsdfsdfsdfsdfsdfsdfsfds",
        columnId: 1
    },
    {
        id: 3,
        title: "Lorem  sdsad sadfsadf sdfsfd",
        columnId: 2
    },
    {
        id: 4,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 2
    },
    {
        id: 5,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 3
    }
];
