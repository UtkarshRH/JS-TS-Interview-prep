# JavaScript `map()` Method and Polyfill

## 🔹 Original `map()` Method
The `map()` method in JavaScript:
- Creates a **new array**.
- Executes a callback function (`cb`) on **each element** of the array.
- Returns the new array without modifying the original one.

### Syntax
arr.map(callback(currentValue, index, array))

### Example
const numbers = [1, 2, 3];
const doubled = numbers.map((num, index, arr) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (original array unchanged)

---

## 🔹 Custom Polyfill for `map()`
We can create our own version of `map()` called `myMap`.

### Implementation
Array.prototype.myMap = function(cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

### Example
const numbers = [1, 2, 3];

const doubled = numbers.myMap((num, index, arr) => {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]

✅ The `myMap` polyfill works exactly like the built-in `map()` method.
