# Advanced Function & Object Types in TypeScript

---

# 4. Default Parameters

Default parameters allow you to assign a **default value** if no argument is passed.

## Example

```typescript
function greet(name: string = "Guest") {
  console.log("Hello " + name);
}
```

---

## Usage

```typescript
greet();            // Hello Guest
greet("Utkarsh");   // Hello Utkarsh
```

---

# 5. Rest Parameters

Used when the number of arguments is **unknown**.

## Example

```typescript
function sum(...numbers: number[]): number {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}
```

---

## Usage

```typescript
sum(1, 2, 3, 4); // 10
```

---

# 6. Object Types

You can define types for objects directly.

## Example

```typescript
let user: { name: string; age: number } = {
  name: "Utkarsh",
  age: 24
};
```

---

## Function with Object

```typescript
function printUser(user: { name: string; age: number }) {
  console.log(user.name);
}
```

---

## Problem

This structure becomes **repetitive and hard to manage** in large applications.

---

## Solution → Type Alias

---

# 7. Type Alias (Very Important)

Type alias allows you to create a **custom reusable type**.

## Example

```typescript
type User = {
  name: string;
  age: number;
};
```

---

## Usage

```typescript
const user1: User = {
  name: "Utkarsh",
  age: 24
};
```

---

## Function Example

```typescript
function getUser(user: User): string {
  return user.name;
}
```

---

# 8. Nested Object Types

You can define **objects inside objects**.

## Example

```typescript
type User = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};
```

---

## Usage

```typescript
const user: User = {
  name: "Utkarsh",
  age: 24,
  address: {
    city: "Nagpur",
    country: "India"
  }
};
```

---

# 9. Readonly Property

`readonly` prevents modification of a property after initialization.

## Example

```typescript
type User = {
  readonly id: number;
  name: string;
};
```

---

## Usage

```typescript
const user: User = {
  id: 1,
  name: "Utkarsh"
};

user.id = 10; // ❌ Error (cannot modify readonly property)
