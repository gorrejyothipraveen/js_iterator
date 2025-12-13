// - Prime number series
// [2, 3, 5, 7, 11, 13....]

const isPrime = (value) => {
  let count = 0
  for(let i = 0; i <= value ; i++) {
    if(value % i === 0) {
      count++;
    }
  }
  
  return count === 2;
}

export function* primeSeries (range) {
  for (let integer = 0; integer < range; integer++) {
    if(isPrime(integer)) {
      yield integer;
    }
  }
}
