// - chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
//   3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
//   3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

export function* chunk(array, chunk, common = 0) {
  let i = 0;
  while (i + chunk <= array.length) {
    const chunkList = array.slice(i, i + chunk);
    yield chunkList;
    i = i + chunk - common;
  }
}

