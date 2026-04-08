/*

Problem:

2677. Chunk Array

Difficulty: Easy

Description:
Given an array `arr` and a chunk size `size`, return a chunked array.

A chunked array contains the original elements in `arr`, but consists of
subarrays each of length `size`. The length of the last subarray may be
less than `size` if `arr.length` is not evenly divisible by `size`.

Note:
Solve it without using lodash's _.chunk function.

-----------------------------------

Example 1:
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation:
The array is split into subarrays each with 1 element.

-----------------------------------

Example 2:
Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation:
The array is split into subarrays of size 3.
The remaining elements form the last subarray.

-----------------------------------

Example 3:
Input: arr = [8,5,3,2,6], size = 6
Output: [[8,5,3,2,6]]
Explanation:
Size is greater than array length, so all elements are in one subarray.

-----------------------------------

Example 4:
Input: arr = [], size = 1
Output: []
Explanation:
Empty array returns empty result.

-----------------------------------

Constraints:
- arr is a string representing the array.
- 2 <= arr.length <= 10^5
- 1 <= size <= arr.length + 1
*/


/**
 * Approach:
 * - Create a result array to store chunks
 * - Loop through array with step = size (i += size)
 * - For each iteration, take a slice from i to i + size
 * - Push that slice into result
 * - Return final chunked array
 *
 * Key Idea:
 * Instead of iterating one by one, we jump by "size"
 * and extract subarrays using slice
 */

var chunk = function(arr, size) {
    let chunckedArray = [];
    for(let i = 0; i< arr.length;i+=size){
        chunckedArray.push(arr.slice(i, i+size))
    }
    return chunckedArray;
};


/**
 * Using Lodash _.chunk (for understanding only ❗ not allowed in question)
 *
 * Explanation:
 * - Lodash provides a built-in method _.chunk()
 * - It automatically splits the array into chunks of given size
 * - Internally it does similar logic (loop + slicing)
 *
 * Syntax:
 * _.chunk(array, size)
 *
 * Example:
 */

const _ = require('lodash');

let result = _.chunk([1,2,3,4,5], 2);
// Output: [[1,2],[3,4],[5]]

/**
 * Note:
 * - Easy and clean, but in interviews / LeetCode,
 *   you should implement logic manually (like above)
 */