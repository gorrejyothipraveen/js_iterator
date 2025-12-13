import { assertEquals } from '@std/assert';
import { primeSeries } from "../src/06_prime_number_series.js";

Deno.test('simple test case for prime series' , () => {
  assertEquals([...primeSeries(5)], [2, 3])
})

Deno.test('using take function to retrieve few prime numbers ' , () => {
  assertEquals([...primeSeries(100).take(2)], [2, 3])
})

Deno.test('using next to get one prime number' , () => {
  assertEquals(primeSeries(20).next().value, 2)
})