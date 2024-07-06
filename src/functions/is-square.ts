/**
 * Checks whether a number is square or not
 * @param n - The number to check
 * @returns Boolean
 */
export function isSquare(n: number): boolean {
	return n > 0 && Math.sqrt(n) % 1 === 0
}
