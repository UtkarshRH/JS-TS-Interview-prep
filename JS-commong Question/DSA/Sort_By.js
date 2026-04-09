/**
 * Approach:
 * - Use inbuilt sort()
 * - Compare elements using function fn
 * - fn(a) and fn(b) give values to compare
 * - If result is negative → a comes first
 * - If positive → b comes first
 *
 * Key Idea:
 * Instead of sorting directly,
 * we sort based on the value returned by fn
 */

var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};


/**
 * Simple Understanding 🔥
 *
 * fn is just telling:
 * "kis base pe sort karna hai"
 *
 * Example:
 * arr = [5, 2, 8]
 * fn = (x) => x
 *
 * Compare:
 * 5 - 2 → positive → swap
 * 2 - 8 → negative → correct
 *
 * Result: [2, 5, 8]
 */


/**
 * Another Example:
 *
 * arr = [{age: 30}, {age: 20}, {age: 25}]
 * fn = (x) => x.age
 *
 * Sorting based on age:
 * Result:
 * [
 *   {age: 20},
 *   {age: 25},
 *   {age: 30}
 * ]
 */


/**
 * Proper (Manual Thinking Way 🧠):
 *
 * - Take two elements (a, b)
 * - Get their values using fn
 * - Compare those values
 * - Decide order based on difference
 *
 * fn(a) - fn(b)
 * ↓
 * negative → a first
 * positive → b first
 * 0 → no change
 */
