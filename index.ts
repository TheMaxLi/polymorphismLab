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
        const {length} = this._collection
        let isSorted = false
        let lastUnsorted = length -1
        while (!isSorted) {
            isSorted = true
            for (let j = 0; j < this._collection.length; j++) {
                for (let i = 0; i < lastUnsorted; i++) {
                    if (this._collection.compare(i, i+1)) {
                        this._collection.swap(i, i+1)
                    }
                }
            }   
        lastUnsorted--
        }
    }
}
  
const link = new LinkedListGroup() 
link.add(12)
link.add(23)
link.add(1)
link.add(0)

const sortUtil1 = new SortUtil(link);
sortUtil1.sort();
link.print()

const sortUtil2 = new SortUtil(new NumberGroup([3, 12, 23, 2, 3, 1, 0]));
sortUtil2.sort()
console.log(sortUtil2.data)

const sortUtil3 = new SortUtil(new Charactergroup("wyoqScnsaB"));
sortUtil3.sort();
console.log(sortUtil3.data)
