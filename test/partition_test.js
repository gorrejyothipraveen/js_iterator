import { assertEquals } from '@std/assert';
import { partition } from "../src/05_partition.js";

Deno.test('simple test', () => {
  const array = [1, 1, 2, 3, 3]
  assertEquals([...partition(array)], [[1 , 1], [2], [3, 3]])
})