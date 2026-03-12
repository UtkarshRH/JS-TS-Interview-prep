# Arrow Functions and Optional Parameters in TypeScript

---

# 2. Arrow Functions with Types

In TypeScript, arrow functions can also have **parameter types** and **return types**.

## Example

```typescript
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

### Explanation

- `a: number` → parameter type  
- `b: number` → parameter type  
- `: number` → return type  

---

## Short Version

```typescript
const multiply = (a: number, b: number): number => a * b;
```

This is a **shorter syntax** when the function returns a single expression.

---

# 3. Optional Parameters

Sometimes function parameters are **not required**.

In TypeScript we use `?` to mark them as optional.

## Example

```typescript
function greet(name: string, age?: number) {
  console.log(name);

  if (age) {
    console.log(age);
  }
}
```

### Explanation

- `name` → required parameter  
- `age?` → optional parameter  

---

## Usage

```typescript
greet("Utkarsh");

greet("Utkarsh", 24);
```

Both calls are **valid** because `age` is optional.
