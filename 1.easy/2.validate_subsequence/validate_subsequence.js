/**
 * Course: AlgoExpert
 * Title: Validate Subsequence
 *
 * Assignment:
 *      Given two non-empty arrays of integers, write a function that determine whether the second array is a subsequence of the first one.
 *      A subsequence of an array is a set of numbers that aren't necessary adjacent in the array, but that are in the same order as the appear in the array.
 *      For instance, the numbers [ 1, 3, 4 ] from a subsequence of the array [ 1, 2, 3, 4 ], and so do the numbers [ 2, 4 ].
 *      Note that a single number in an array and the array itself are both valid subsequences of the array.
 *
 * Author: Andriy Polukhin
 * Date: 10.06.2022
 *
 */

let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]

let output = true

/**
 *  Understanding the problem
 *
 *      We are given two arrays of intergers @array and @sequence .
 *      We are asked to implement a function that is going to check whether all the numbers in the @sequence appear in the @array and they appear in the same order.
 *      In other words, the function needs to find out if we can get the @sequence array from the @array ,  when we delete some or no elements in the @array without changing the order of the remaining elements.
 *
 *      Example:
 *      array: [ 3, 1, 7, 5, 10, 2 ]
 *      sequence: [ 1, 5, 2 ]
 *      Output: true
 *
 *  Approach
 *
 *      We can use a pointer to remember the position we are at in the @sequence array.
 *      At each iteration, compare the current element in the @array to the element that the pointer is pointing at.
 *      If they are equal to each other, then it means the element in the @sequence does appear in the @array , move the pointer forward by 1.
 *      If the pointer is equal to the length of the @sequence array, then it means all the elements in the @sequence array are found in the @array and they are in the same order, return @true .
 *      When we get out of the loop without returning the result, return @false
 */

const is_valid_subsequence = (array, sequence) => {
	let seqIdx = 0

	for (const value of array) {
		if (value === sequence[seqIdx]) seqIdx++
		if (seqIdx === sequence.length) return true
	}

	return false
}

is_valid_subsequence(array, sequence)

/**
 * Alternative Implementation
 *
 */
const is_valid_subsequence_alt = (array, sequence) => {
	let arrIdx = 0
	let seqIdx = 0

	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) {
			seqIdx++
		}
		arrIdx
	}

	return seqIdx === sequence.length
}

is_valid_subsequence_alt(array, sequence)
