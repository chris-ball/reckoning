import { uniquePrimeFactors } from '../src/functions/unique-prime-factors'
import { expect, test } from 'vitest'

test('check unique prime factors of 11', () => {
	expect(uniquePrimeFactors(11)).toEqual([11])
})
test('check unique prime factors of 15', () => {
	expect(uniquePrimeFactors(15)).toEqual([3, 5])
})
test('check unique prime factors of 24', () => {
	expect(uniquePrimeFactors(24)).toEqual([2, 3])
})
