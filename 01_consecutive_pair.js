// - Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

const array = [1, 2, 3, 4 ,5];

function* consecutivePairsGenerator() {
  for(let i = 0; i < array.length - 1; i++) {
    yield [array[i], array[i + 1]];
  }
}

const x = consecutivePairsGenerator();