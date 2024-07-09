import { fibonacciSequence } from "../src/functions/fibonacci-sequence"
import { expect, test } from 'vitest'

test('generates an array of the first 10 Fibonacci numbers', () => {
	expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})
