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
        let data = this._data.split("")
        return (data[leftPos].localeCompare(data[rightPos]) > 0)
    }
    swap(leftPos: number, rightPos: number): void {
        let data = this._data.split("")
        let tempLeft = data[leftPos]
        data[leftPos] = data[rightPos]
        data[rightPos] = tempLeft
        this._data = data.join("")
    }
}