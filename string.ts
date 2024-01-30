import { ISortable } from "./interface";

export class Charactergroup implements ISortable {
    data: string
    get length(): number {}
    compare(leftPos: number, rightPost: number): boolean {
    
    }
    swap(leftPos: number, rightPost: number): void {
        
    }
}