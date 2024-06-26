/**
 * Checks whether a number is prime or not
 * @param n - The number to check
 * @returns Boolean
 */
function isPrime(n: number): boolean {
	if (!Number.isInteger(n) || n < 2) return false

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) return false
	}

	return true
}

export default isPrime
