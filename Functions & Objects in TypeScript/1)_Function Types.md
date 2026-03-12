# Functions in TypeScript

In TypeScript we define **parameter types** and **return type** for functions.

---

## Example

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

---

## Explanation

- `a: number` → parameter type  
- `b: number` → parameter type  
- `: number` → return type  

This means the function **accepts two numbers and returns a number**.

---

## Usage

```typescript
add(5, 10); // 15
```

---

## Type Safety

If someone writes:

```typescript
add(5, "10");
```

TypeScript will give a **compile-time error** because `"10"` is a **string**, not a **number**.
