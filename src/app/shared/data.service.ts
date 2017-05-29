import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Todo} from "../components/todo/todo";
import {Board} from "../components/board/board";
import {Column} from "../components/column/column";
import {Card} from "../components/card/card";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos: Todo[] = [
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
        const boards: Board[] = [
            {
                id: 1,
                title: "Board for work"
            },
            {
                id: 2,
                title: "Board for study"
            }
        ];
        const columns: Column[] = [
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
        const cards: Card[] = [
            {
                id: 1,
                title: "Eius esse exercitationem id",
                columnId: 1,
                description: '',
                startDate: '',
                dueDate: '',
                estimated: 0,
                remaining: 0,
                spent: 0
            },
            {
                id: 2,
                title: "Dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consequatur doloremque ea eius esse exercitationem id",
                columnId: 1,
                description: '',
                startDate: '',
                dueDate: '',
                estimated: 0,
                remaining: 0,
                spent: 0
            },
            {
                id: 3,
                title: "Quis reiciendis rem sed tempore temporibus",
                columnId: 2,
                description: 'Dolor sit amet, consectetur adipisicing elit. Asperiores assumenda consequatur doloremque ea ',
                startDate: '2017-5-24',
                dueDate: '2017-5-28',
                estimated: 4,
                remaining: 1,
                spent: 3,

            },
            {
                id: 4,
                title: "Lorem  sfdgfgfd sadfsadf sdfsfdss",
                columnId: 2,
                description: '',
                startDate: '2017-5-23',
                dueDate: '2017-5-31',
                estimated: 8,
                remaining: 4,
                spent: 4,

            },
            {
                id: 5,
                title: "Nesciunt Lorem nobis obcaecati optio",
                columnId: 3,
                description: '',
                startDate: '',
                dueDate: '',
                estimated: 0,
                remaining: 0,
                spent: 0
            },
            {
                id: 6,
                title: "Iure nesciunt nobis obcaecati optio",
                columnId: 6,
                description: '',
                startDate: '',
                dueDate: '',
                estimated: 0,
                remaining: 0,
                spent: 0
            },
            {
                id: 6,
                title: "Asperiores assumenda consequatur",
                columnId: 5,
                description: '',
                startDate: '',
                dueDate: '',
                estimated: 0,
                remaining: 0,
                spent: 0
            }
        ];

        return {todos, boards, columns, cards};
    }
}
