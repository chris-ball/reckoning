/**
 * Checks whether an integer is prime.
 * @param n - Integer to check
 * @returns Boolean
 */
export function isPrime(n: number): boolean {
	if (!Number.isInteger(n) || n < 2) return false

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) return false
	}

	return true
}
