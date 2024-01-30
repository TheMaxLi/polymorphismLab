import { ISortable } from "./interface";

export class NumberGroup implements ISortable {
    private _data: number[]

    constructor(data: number[]) {
        this._data = data 
    }

    get data(): number[] {
        return this._data
    }

    get length(): number {
        return this._data.length
    }
    compare(leftPos: number, rightPos: number): boolean {
        return leftPos > rightPos
    }
    swap(leftPos: number, rightPos: number): void {
        let tempPos = leftPos
        leftPos = rightPos
        rightPos = tempPos
    }
}