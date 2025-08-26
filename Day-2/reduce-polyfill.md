# JavaScript `reduce()` Method and Polyfill

## 🔹 Original `reduce()` Method
The `reduce()` method in JavaScript:
- Executes a reducer function on each element of the array.
- Returns a **single value**.
- Can take an optional initial value for the accumulator.

### Syntax
arr.reduce(callback(accumulator, currentValue, index, array), initialValue)

### Example
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

---

## 🔹 Custom Polyfill for `reduce()`
We can create our own version of `reduce()` called `myReduce`.

### Implementation
Array.prototype.myReduce = function(cb, initialVal) {
  let accumulator = initialVal;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

### Example
const numbers = [1, 2, 3, 4];

const sum = numbers.myReduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

✅ The `myReduce` polyfill works exactly like the built-in `reduce()` method.
