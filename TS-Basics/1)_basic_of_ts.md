# 1. What is TypeScript?

## Simple Definition (Interview Ready)

TypeScript is a **superset of JavaScript** that adds **static typing**.  
It helps developers **catch errors during development instead of runtime**.

---

## Example in JavaScript

```javascript
function add(a, b) {
  return a + b;
}

add(10, "20"); // JS allows this
```

### Problem
JavaScript does not check types, so you might get **unexpected results**.

---

## Example in TypeScript

```typescript
function add(a: number, b: number): number {
  return a + b;
}

add(10, "20"); // ❌ Error
```

### Why?

TypeScript checks types **before running the code**, preventing bugs early in development.

---

## Key Point

JavaScript → Errors found at **runtime**  
TypeScript → Errors found at **development time**
