import { ISortable } from "./interface";
import { LinkedListGroup } from "./linkedList";
import { NumberGroup } from "./list";
import { Charactergroup } from "./string";

class SortUtil {
    collection: ISortable
  
    constructor(collection: ISortable) {
      this.collection = collection;
    }
  
    sort(): void {
      
  }
}
  
  const sortUtil1 = new SortUtil(new LinkedListGroup);
  sortUtil1.sort();
  const sortUtil2 = new SortUtil(new NumberGroup);
  sortUtil2.sort();
  const sortUtil3 = new SortUtil(new Charactergroup);
  sortUtil3.sort();
