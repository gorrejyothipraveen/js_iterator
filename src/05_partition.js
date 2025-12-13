export function* partition(items, predicate) {
  let array = [];
  let initialValue;
  for (let index = 0; index < items.length; index++) {
    if(array.length === 0) {
      initialValue = predicate(items[index]);
    }
    if(initialValue !== predicate(items[index])) {
      yield [...array];
      array = [];
      initialValue = predicate(items[index]);
    } 

    array.push(items[index]); 
    if( index === items.length - 1) {
      yield [...array];
    }
  }
}

// - partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]
//   isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]