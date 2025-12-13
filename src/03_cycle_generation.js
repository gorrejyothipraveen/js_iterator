// - Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]

const originalArray = [1, 2, 3, 4, 5];
function* cycle() {
  let array = [...originalArray]
  while(true) {
    yield array;
    array = [...array , ...originalArray];
  }
}

const x = cycle();

let i = 0;
while(i < 3) {
  console.log(x.next().value);
  i++;
}