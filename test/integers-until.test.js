import { expect, test } from 'vitest'
import { integersUntil } from '../src/functions/integers-until'

test('generates an array of integers from 1 to 10', () => {
	expect(integersUntil(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
test('generates an array of integers from 15 to 25', () => {
	expect(integersUntil(25, 15)).toEqual([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])
})
test('generates an array of integers from -5 to 10', () => {
	expect(integersUntil(10, -5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
