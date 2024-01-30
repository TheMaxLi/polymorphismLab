import { ISortable } from "./interface";
import { LinkedListGroup } from "./linkedList";
import { NumberGroup } from "./list";
import { Charactergroup } from "./string";

class SortUtil {
    private _collection: ISortable
  
    constructor(collection: ISortable) {
      this._collection = collection;
    }

    
  
    sort(): void {
    const { length } = this._collection;
    let isSorted = false;
    let lastUnsorted = length - 1;
    while (!isSorted) {
      isSorted = true;
    }
      for (let i = 0; i < this._collection.length; i++) {
        //if (this._collection.compare(this._collection[i], this._collection[i+1])) {
            //this._collection.swap(this._collection[i], this._collection[i+1])
        }
      //}
    }
}
  
const sortUtil1 = new SortUtil(new LinkedListGroup);
sortUtil1.sort();
const link = new LinkedListGroup() 
link.add(12)
link.add(23)
link.add(1)

link.print()
console.log(link.length)

const sortUtil2 = new SortUtil(new NumberGroup([3, 12, 23, 2, 3, 1]));
const numlist = new NumberGroup([3, 12, 23, 2, 3, 1])

for (let i = 0; i < numlist.length; i++) {
    for (let i = 0; i < numlist.length; i++) {
        if (numlist.compare(numlist.data[i], numlist.data[i+1])) {
        }
    }
}

const string = new Charactergroup("wyoqSnsa")
console.log(string.data)
let what = []
for (let i = 0; i< string.data.length; i++) {
    what.push(String.fromCharCode(string.data[i]))
}
console.log(what.join(""))

//console.log(numlist.data)
  //sortUtil2.sort();
  //const sortUtil3 = new SortUtil(new Charactergroup);
  //sortUtil3.sort();
