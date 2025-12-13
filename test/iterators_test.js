import { assertEquals } from '@std/assert';
import { lineIterator } from "../src/04_iterator_lines.js";
// import {} from 

Deno.test('simple test' , () => {
  assertEquals(lineIterator(), '')
}) 