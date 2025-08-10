# 📅 Day 1 – JavaScript Interview Prep

## 📝 Topics Covered

- Hoisting
- var, let, const
- Shadowing

---

## 1️⃣ Hoisting

**Definition:**  
Hoisting is JavaScript's default behavior of moving **variable** and **function** declarations to the top of their scope (before code execution).  
Only **declarations** are hoisted, **not initializations**.

---

### Example 1: Variable Hoisting with `var`

```javascript
console.log(a); // undefined (hoisted but not initialized)
var a = 10;
console.log(a); // 10
```

**Explanation:**

- JavaScript interprets it as:
  ```javascript
  var a;
  console.log(a);
  a = 10;
  console.log(a);
  ```

---

### Example 2: Function Hoisting

```javascript
sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}
```

**Explanation:**

- Function declarations are fully hoisted with their definition.

---

### Example 3: let & const Hoisting

```javascript
console.log(b); // ReferenceError (TDZ)
let b = 20;

console.log(c); // ReferenceError (TDZ)
const c = 30;
```

**Explanation:**

- `let` and `const` are hoisted but remain in **Temporal Dead Zone (TDZ)** until initialized.

---

## 2️⃣ var, let, const

### **var**

- Function-scoped
- Can be re-declared and updated
- Hoisted (initialized as `undefined`)

```javascript
var x = 5;
var x = 10; // ✅ Allowed
x = 15; // ✅ Allowed
```

---

### **let**

- Block-scoped (`{}`)
- Cannot be re-declared in the same scope
- Can be updated
- Hoisted but in TDZ

```javascript
let y = 5;
// let y = 10; // ❌ Error: redeclaration not allowed
y = 15; // ✅ Allowed
```

---

### **const**

- Block-scoped
- Cannot be re-declared or updated
- Must be initialized at declaration

```javascript
const z = 5;
// z = 10; // ❌ Error
```

---

### Scope & Behavior Summary Table

| Feature       | var                  | let          | const        |
| ------------- | -------------------- | ------------ | ------------ |
| Scope         | Function             | Block        | Block        |
| Redeclaration | ✅ Yes               | ❌ No        | ❌ No        |
| Reassignment  | ✅ Yes               | ✅ Yes       | ❌ No        |
| Hoisting      | ✅ Yes (`undefined`) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |

---

## 3️⃣ Shadowing

**Definition:**  
Shadowing occurs when a variable declared in an inner scope **has the same name** as a variable in the outer scope. The inner variable **"shadows"** the outer one.

---

### Example 1: var Shadowing

```javascript
var a = 10;
function test() {
  var a = 20; // shadows outer 'a'
  console.log(a); // 20
}
test();
console.log(a); // 10
```

---

### Example 2: let Shadowing

```javascript
let b = 30;
{
  let b = 40; // shadows outer 'b'
  console.log(b); // 40
}
console.log(b); // 30
```

---

### Example 3: Illegal Shadowing

```javascript
let c = 50;
{
  // var c = 60; // ❌ SyntaxError: Cannot shadow 'let' with 'var'
}
```

**Explanation:**  
You **can** shadow `var` with `let` or `const`,  
but **cannot** shadow `let` or `const` with `var`.

---

## 🎯 Interview Tips

- Remember: `var` is **function scoped**, `let` and `const` are **block scoped**.
- `let` and `const` avoid accidental redeclarations.
- Understand TDZ: the time between variable hoisting and initialization where it is not accessible.
- Illegal shadowing is a common interview trap.
- Function declarations are hoisted completely, function expressions are not.

---
