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
        columnId: 1,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    },
    {
        id: 2,
        title: "Lorem  sdsad wweewwww  sdfsfddffffffffffffffffffsdfsdfsdfsdfsdfsdfsdfsdfsfds",
        columnId: 1,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    },
    {
        id: 3,
        title: "Lorem  sdsad sadfsadf sdfsfd",
        columnId: 2,
        description:'zsdgag sdfga agsdfgsdfg sdfgsd fgsdfgs f sdfgdfgsdfgsdf sdfgsdfg sdfgsdfg sdfgsdfgsd f df',
        startDate:'2017-5-24',
        dueDate:'2017-5-26',
        startTime:'',
        dueTime:''
    },
    {
        id: 4,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 2,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    },
    {
        id: 5,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 3,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    },
    {
        id: 6,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 6,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    },
    {
        id: 6,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 5,
        description:'',
        startDate:'',
        dueDate:'',
        startTime:'',
        dueTime:''
    }
];
