/**
 * Generates an array of integers from start to limit (inclusive).
 *
 * @param limit - The number to stop at.
 * @param start - The number to start from (default: 1).
 * @returns An array of integers.
 */
export function integersUntil(limit: number, start: number = 1): number[] {
	return Array.from({length: limit}, (_, i) => i + start)
}
