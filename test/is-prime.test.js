import { expect, test } from 'vitest'
import { isPrime } from '../src/functions/is-prime'

test('checks if 2 is prime', () => {
	expect(isPrime(2)).toBe(true)
})
test('checks if 3 is prime', () => {
	expect(isPrime(3)).toBe(true)
})
test('checks if 5 is prime', () => {
	expect(isPrime(5)).toBe(true)
})

test('checks if 4 is prime', () => {
	expect(isPrime(4)).toBe(false)
})
test('checks if 6 is prime', () => {
	expect(isPrime(6)).toBe(false)
})
