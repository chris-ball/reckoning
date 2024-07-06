/**
 * 
 * @param number - The number to factor
 * @returns An array of unique factors
 */
export function uniqueFactors(number: number): number[] {
	return [...Array(number + 1).keys()]
		.filter( (i) => number % i === 0 )
}
