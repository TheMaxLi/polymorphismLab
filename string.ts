import { ISortable } from "./interface";

export class Charactergroup implements ISortable {
    private _data: string

    constructor(data: string) {
        this._data = data
    }

    get length(): number {
        return this._data.length
    }
    compare(leftPos: number, rightPos: number): boolean {
        leftPos.attr.localeCompare(rightPos.attr);
    }
    swap(leftPos: number, rightPos: number): void {
        
    }
}