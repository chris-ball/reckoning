/**
 * Generates an array of integers up to a given limit (inclusive).
 * @param end - Final number in the array.
 * @param start - Starting number (default: 1).
 * @returns An array of integers.
 */
export function integersUntil(end: number, start: number = 1): number[] {
	return Array.from({length: end - start + 1}, (_, i) => i + start)
}
