/**
 * Approach:
 * - We use reduce() to convert array into an object (grouped result)
 * - For each item:
 *    1. Generate a key using the callback fn
 *    2. Check if that key already exists in result object
 *    3. If not → create an empty array
 *    4. Push current item into that key's array
 * - Finally return the grouped object
 *
 * Key Idea:
 * We are building an object where:
 * key = fn(item)
 * value = array of items matching that key
 */

Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) => {

        // Step 1: get key from function
        const key = fn(item);

        // Step 2: if key not present, initialize it
        if (!grouped[key]) {
            grouped[key] = [];
        }

        // Step 3: push current item into that group
        grouped[key].push(item);

        // Step 4: return updated object for next iteration
        return grouped;

    }, {}); // initial value = empty object
};


/**
 * Example Dry Run:
 * arr = [1,2,3,4]
 * fn = (x) => x % 2 === 0 ? "even" : "odd"
 *
 * Iteration:
 * item = 1 → key = "odd" → { odd: [1] }
 * item = 2 → key = "even" → { odd: [1], even: [2] }
 * item = 3 → key = "odd" → { odd: [1,3], even: [2] }
 * item = 4 → key = "even" → { odd: [1,3], even: [2,4] }
 *
 * Final Output:
 * {
 *   odd: [1,3],
 *   even: [2,4]
 * }
 */
