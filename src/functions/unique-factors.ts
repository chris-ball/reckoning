/**
 * Generates an array of all factors of a given number, including 1 and the number itself.
 * @param n - The number to factor
 * @returns An array of unique factors
 */
export function uniqueFactors(n: number): number[] {
	if (!Number.isInteger(n)) throw new Error("input must be an integer");

	return [...Array(n + 1).keys()]
		.filter( (i) => n % i === 0 )
}
