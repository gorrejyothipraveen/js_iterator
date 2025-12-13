export function* partition(items, predicate) {
  let array = [];
  let initialValue;
  for (let index = 0; index < items.length; index++) {
    const predicatedValue = predicate(items[index]);
    if(array.length === 0) {
      initialValue = predicatedValue;
    }
    if(initialValue !== predicatedValue) {
      yield [...array];
      array = [];
      initialValue = predicatedValue;
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