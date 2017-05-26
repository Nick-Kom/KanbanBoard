import {Injectable} from '@angular/core';
import {Column} from "./column";
import {COLUMNS} from "../mocks";

@Injectable()
export class ColumnService {
    private dataColumns: Column[] = COLUMNS;

    getDataColumns(): Column[] {
        return this.dataColumns;
    }

    createColumn(column: Column) {
        this.dataColumns.push(column);
        console.log(this.dataColumns)
    }

    deleteColumn(column: Column) {
        let indexToRemove = this.dataColumns.indexOf(column);
        if (indexToRemove > -1) {
            this.dataColumns.splice(indexToRemove, 1);
        }
    }
}