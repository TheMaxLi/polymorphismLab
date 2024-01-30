export interface ISortable {
    length: number
    compare(leftPos: number, rightPost: number): boolean
    swap(leftPos: number, rightPost: number): void
}