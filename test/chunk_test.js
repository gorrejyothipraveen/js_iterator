import { assertEquals } from '@std/assert';
import { chunk } from "../src/07_chunk.js";

Deno.test('simple test case ', () => {
  const array = [1, 2, 3, 4]
  assertEquals([...chunk(array, 2)], [[1, 2], [3, 4]])
})

Deno.test('3, 1', () => {
  const array = [1, 2, 3, 4, 5]
  assertEquals([...chunk(array, 3, 1)], [[1, 2, 3], [3, 4, 5]])
})

Deno.test('3, 2', () => {
  const array = [1, 2, 3, 4, 5]
  assertEquals([...chunk(array, 3, 2)], [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
});

Deno.test('3, 2  using next method', () => {
  const array = [1, 2, 3, 4, 5]
  assertEquals(chunk(array, 3).next().value, [1, 2, 3])
})