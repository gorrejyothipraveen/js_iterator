import { assertEquals } from '@std/assert';
import { lineIterator } from "../src/04_iterator_lines.js";

Deno.test('simple test' , () => {
  const text =  "this\nis\ngood";
  const result = lineIterator(text)
  assertEquals([...result], ['this', 'is', 'good']);
}) 

Deno.test('hi\nhello\nhow are you' , () => {
  const text =  "hi\nhello\nhow are you";
  const result = lineIterator(text)
  assertEquals([...result], [ "hi", "hello", "how are you" ]);
}) 

Deno.test('only hi ,there is no newline' , () => {
  const text =  "hi";
  const result = lineIterator(text)
  assertEquals(result.next().value, "hi" );
}) 

Deno.test('undefined value' , () => {
  const text =  "hi";
  const result = lineIterator(text);
  result.next();
  assertEquals(result.next().value, undefined );
}) 