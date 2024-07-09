/**
 * Get the nth number in the Fibonacci sequence
 * @param n The nth number required
 * @returns The nth number in the fibonacci sequence
 */
export function fibonacciNth(n: number): number {
	let a = 0
	let b = 1
	let c: number

	if (n === 0) return a

	for (let i = 2; i <= n; i++) {
		c = a + b
		a = b
		b = c
	}

	return b
}
