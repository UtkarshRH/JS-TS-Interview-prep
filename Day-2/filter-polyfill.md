# JavaScript `filter()` Method and Polyfill

## 🔹 Original `filter()` Method
The `filter()` method in JavaScript:
- Creates a **new array**.
- Executes a callback function (`cb`) on **each element**.
- Includes only those elements where the callback returns `true`.
- Does **not** modify the original array.

### Syntax
arr.filter(callback(currentValue, index, array))

### Example
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num, index, arr) => {
  return num % 2 === 0;
});

console.log(evens);   // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)

---

## 🔹 Custom Polyfill for `filter()`
We can create our own version of `filter()` called `myFilter`.

### Implementation
Array.prototype.myFilter = function(cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

### Example
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.myFilter((num, index, arr) => {
  return num % 2 === 0;
});

console.log(evens);   // [2, 4]
console.log(numbers); // [1, 2, 3, 4, 5]

✅ The `myFilter` polyfill works exactly like the built-in `filter()` method.
