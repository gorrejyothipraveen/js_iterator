// - Generate all pair permutations
//   [1,2,3,4,5] => [[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],...]

const array = [1,2,3,4,5]

function* pairPermutations () {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      yield [array[i], array[j]];
    }
  }
}

const pairs = pairPermutations();