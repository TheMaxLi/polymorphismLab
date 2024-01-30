import { ISortable } from "./interface";
import { LinkedListGroup } from "./linkedList";
import { NumberGroup } from "./list";
import { Charactergroup } from "./string";

class SortUtil {
    private _collection: ISortable
  
    constructor(collection: ISortable) {
      this._collection = collection;
    }

    get data() {
        return this._collection
    }

    sort(): void {
        for (let j = 0; j < this._collection.length; j++) {
            for (let i = 0; i < this._collection.length; i++) {
                if (this._collection.compare(i, i+1)) {
                    this._collection.swap(i, i+1)
                }
            }
        }
    }
}
  
const sortUtil1 = new SortUtil(new LinkedListGroup);
sortUtil1.sort();
const link = new LinkedListGroup() 
link.add(12)
link.add(23)
link.add(1)

const sortUtil2 = new SortUtil(new NumberGroup([3, 12, 23, 2, 3, 1, 0]));
sortUtil2.sort()
console.log(sortUtil2.data)

const sortUtil3 = new SortUtil(new Charactergroup("wyoqScnsaB"));
sortUtil3.sort();
console.log(sortUtil3.data)
