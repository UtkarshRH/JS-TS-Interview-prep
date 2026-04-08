/**
 * Approach:
 * - Extend Array prototype by adding a new method `last`
 * - `this` refers to the current array
 * - If array is empty → return -1
 * - Otherwise return element at index (length - 1)
 *
 * Key Idea:
 * Last element of array is always at index: length - 1
 */

Array.prototype.last = function() {
    if(this.length === 0){
        return -1
    }
    return this[this.length - 1];
};