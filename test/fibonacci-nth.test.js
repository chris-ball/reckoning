import { fibonacciNth } from '../src/functions/fibonacci-nth'
import { expect, test } from 'vitest'

test('fibonacciNth(0) returns 0', () => {
	expect(fibonacciNth(0)).toBe(0)
})
test('fibonacciNth(1) returns 1', () => {
	expect(fibonacciNth(1)).toBe(1)
})
test('fibonacciNth(5) returns 5', () => {
	expect(fibonacciNth(5)).toBe(5)
})
test('fibonacciNth(10) returns 55', () => {
	expect(fibonacciNth(10)).toBe(55)
})