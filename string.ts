import { ISortable } from "./interface";

export class Charactergroup implements ISortable {
    private _data: string

    constructor(data: string) {
        this._data = data
    }

    get data(): number[] {
        let newData : number[] = []
        let splitString = this._data.split("")
        for (let i = 0; i < splitString.length; i++) {
            newData.push(splitString[i].charCodeAt(0)) 
        }
        return newData
    }

    get length(): number {
        return this._data.length
    }
    compare(leftPos: number, rightPos: number): boolean {
        return true
    }
    swap(leftPos: number, rightPos: number): void {
        
    }
}