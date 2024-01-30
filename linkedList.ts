import { ISortable } from "./interface";

class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
      this.data = data;
    }
  }

  export class LinkedListGroup implements ISortable {
    private _head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this._head) {
        this._head = node;
        return;
      }
  
      let tail = this._head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
        if (!this._head) {
            return 0;
          }
          let count = 0
          let node: Node | null = this._head;
          while (node) {
            count++
            node = node.next;
          }
          return count
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this._head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this._head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }
  
    compare(leftPos: number, rightPos: number): boolean {
        return this.at(leftPos).data > this.at(rightPos).data
    } 
  
    swap(leftPos: number, rightPos: number): void {
        if (!this.at(leftPos).data || !this.at(leftPos).data) {
            return 
        }
        let tempData = this.at(leftPos).data 
        this.at(leftPos).data = this.at(rightPos).data 
        this.at(leftPos).data = tempData
    }
  
    print(): void {
      if (!this._head) {
        return;
      }
      let node: Node | null = this._head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }