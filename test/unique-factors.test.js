import { uniqueFactors } from '../src/functions/unique-factors'
import { expect, test } from 'vitest'

test('check unique factors of 11', () => {
	expect(uniqueFactors(11)).toEqual([1, 11])
})
test('check unique factors of 15', () => {
	expect(uniqueFactors(15)).toEqual([1, 3, 5, 15])
})
test('check unique factors of 24', () => {
	expect(uniqueFactors(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24])
})
