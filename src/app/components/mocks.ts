import {Column} from "./column/column";
import {Board} from "./board/board";
import {Card} from "./card/card";
import {Todo} from "./todo/todo";

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
        title: "Eius esse exercitationem id",
        columnId: 1,
        description: '',
        startDate: '',
        dueDate: ''
    },
    {
        id: 2,
        title: "Dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consequatur doloremque ea eius esse exercitationem id",
        columnId: 1,
        description: '',
        startDate: '',
        dueDate: ''
    },
    {
        id: 3,
        title: "Quis reiciendis rem sed tempore temporibus",
        columnId: 2,
        description: 'Dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consequatur doloremque ea ',
        startDate: '2017-5-24',
        dueDate: '2017-5-28'
    },
    {
        id: 4,
        title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
        columnId: 2,
        description: '',
        startDate: '',
        dueDate: ''
    },
    {
        id: 5,
        title: " nesciunt Lorem nobis obcaecati optio",
        columnId: 3,
        description: '',
        startDate: '',
        dueDate: ''
    },
    {
        id: 6,
        title: "Iure nesciunt nobis obcaecati optio",
        columnId: 6,
        description: '',
        startDate: '',
        dueDate: ''
    },
    {
        id: 6,
        title: "Asperiores assumenda consequatur",
        columnId: 5,
        description: '',
        startDate: '',
        dueDate: ''
    }
];


export const TODOS: Todo[] = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        completed: true,
        cardId: 3
    },
    {
        id: 2,
        title: "Board for Lorem ipsum dolor",
        completed: true,
        cardId: 3
    },
    {
        id: 3,
        title: "Board for Lorem ipsum dolor",
        completed: false,
        cardId: 3
    }
];