import { assertEquals } from '@std/assert';
import { partition } from "../src/05_partition.js";

Deno.test('simple test', () => {
  const array = [1, 1, 2, 3, 3];
  assertEquals([...partition(array, x => x)], [[1 , 1], [2], [3, 3]])
})

Deno.test('[1, 1, 2, 3, 3, 3, 3 ,3] : [[1 , 1], [2], [3, 3, 3, 3, 3]]', () => {
  const array = [1, 1, 2, 3, 3, 3, 3 ,3];
  assertEquals([...partition(array, x => x)], [[1 , 1], [2], [3, 3, 3, 3, 3]])
})

Deno.test('only one element is there in array to partition', () => {
  const array = [1];
  assertEquals([...partition(array, x => x)], [[1]])
})

Deno.test('retrieving only one partition using next', () => {
  const array = [1, 1, 2, 3, 3];
  assertEquals(partition(array, x => x).next().value, [1 , 1])
})

Deno.test('simple test for even and odd numbers partition', () => {
  const array = [1, 1, 2, 3, 3];
  assertEquals([...partition(array, x => (x & 1))], [[1 , 1], [2], [3, 3]])
})
