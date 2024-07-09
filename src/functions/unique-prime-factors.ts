import { isPrime } from "./is-prime"

/**
 * Generates an array of all prime factors of a given number.
 * @param n - The number to factor
 * @returns An array of unique prime factors
 */
export function uniquePrimeFactors(n: number): number[] {
	if (!Number.isInteger(n)) throw new Error("input must be an integer");

	const result: number[] = []
	for (let i = 2; i <= n; i++) {
		while (isPrime(i) && n % i === 0) {
			if (!result.includes(i)) result.push(i)
			n /= i
		}
	}
	return result
}
