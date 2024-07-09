/**
 * Generates an array of the first n Fibonacci numbers
 * @param n Number of iterations
 * @returns An array of the first n Fibonacci numbers
 */
export function fibonacciSequence(n: number): number[] {
	if (!Number.isInteger(n)) throw new Error("input must be an integer")

	if (n === 1) return [0]

	let seq = [0, 1]
	for (let i = 2; i < n; i++) {
		seq[i] = seq[i - 2] + seq[i - 1];
	}
	return seq
}
