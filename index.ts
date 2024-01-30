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

  //const sortUtil2 = new SortUtil(new NumberGroup);
  //sortUtil2.sort();
  //const sortUtil3 = new SortUtil(new Charactergroup);
  //sortUtil3.sort();
