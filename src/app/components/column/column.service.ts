import {Injectable} from '@angular/core';
import {Column} from "./column";

const COLUMNS: Column[] = [
    {
        id: 1,
        title: "Plan"
    },
    {
        id: 2,
        title: "Doing"
    },
    {
        id: 3,
        title: "Done"
    }
];

@Injectable()
export class ColumnService {
    private dataColumns: Column[] = COLUMNS;

    getDataColumns(): Column[] {
        return this.dataColumns;
    }

    createColumn(column:Column) {
        this.dataColumns.push(column);

    }


}