/**
 * Checks whether a number is square.
 * @param n - Integer to check
 * @returns Boolean
 */
export function isSquare(n: number): boolean {
	if (!Number.isInteger(n)) throw new Error("input must be an integer");

	return n > 0 && Math.sqrt(n) % 1 === 0
}
