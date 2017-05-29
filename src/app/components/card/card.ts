export class Card {
    constructor(public id: number,
                public title: string,
                public columnId: number,
                public description: string,
                public startDate: string,
                public dueDate: string,
                public estimated: number,
                public remaining: number,
                public spent: number) {
    }
}