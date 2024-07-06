import { isPrime } from "./is-prime"

/**
 * 
 * @param n - The number to factor
 * @returns An array of unique prime factors
 */
export function uniquePrimeFactors(n: number): number[] {
	const result: number[] = []

	for (let i = 2; i <= n; i++) {
		while (isPrime(i) && n % i === 0) {
			if (!result.includes(i)) result.push(i)
			n /= i
		}
	}

	return result
}
