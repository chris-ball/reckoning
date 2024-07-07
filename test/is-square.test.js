import { expect, test } from 'vitest'
import { isSquare } from '../src/functions/is-square'

test('checks if 1 is square', () => {
	expect(isSquare(1)).toBe(true)
})
test('checks if 4 is square', () => {
	expect(isSquare(4)).toBe(true)
})
test('checks if 9 is square', () => {
	expect(isSquare(9)).toBe(true)
})
test('checks if 16 is square', () => {
	expect(isSquare(16)).toBe(true)
})

test('checks if 5 is square', () => {
	expect(isSquare(5)).toBe(false)
})
test('checks if 6 is square', () => {
	expect(isSquare(6)).toBe(false)
})
test('checks if 7 is square', () => {
	expect(isSquare(7)).toBe(false)
})
test('checks if 15 is square', () => {
	expect(isSquare(15)).toBe(false)
})