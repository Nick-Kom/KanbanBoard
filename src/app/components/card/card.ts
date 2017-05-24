export class Card {
    constructor(public id: number,
                public title: string,
                public columnId: number,
                public description:string,
                public startDate:string,
                public dueDate:string
    ) {
    }
}