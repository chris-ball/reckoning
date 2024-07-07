/**
 * Checks whether a number is square.
 * @param n - Integer to check
 * @returns Boolean
 */
export function isSquare(n: number): boolean {
	return n > 0 && Math.sqrt(n) % 1 === 0
}
