import { ISortable } from "./interface";

export class NumberGroup implements ISortable {
    data: number[]
    get length(): number {}
    compare(leftPos: number, rightPost: number): boolean {
    
    }
    swap(leftPos: number, rightPost: number): void {
        
    }
}