# 6. Basic Types (Very Important)

TypeScript provides **built-in types** that help define what kind of data a variable can store.  
This helps catch errors during development.

---

## String

Used to store text values.

```typescript
let name: string = "Utkarsh";
```

---

## Number

Used for numeric values (integers, floats, etc.).

```typescript
let age: number = 24;
```

---

## Boolean

Represents **true or false** values.

```typescript
let isDeveloper: boolean = true;
```

---

## Array

Used to store **multiple values of the same type**.

### Method 1

```typescript
let skills: string[] = ["Node", "React", "MongoDB"];
```

### Method 2 (Generic syntax)

```typescript
let numbers: Array<number> = [1, 2, 3];
```

---

## Tuple

A **tuple** allows storing **fixed types in a specific order**.

Example:

```typescript
let user: [string, number] = ["Utkarsh", 24];
```

Here:
- First value → string  
- Second value → number  

---

## Enum

Enums are used for **defining constant values**.

Example:

```typescript
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
```

Enums help make code **more readable and organized**.

---

## Any (Avoid This)

The `any` type **disables type checking**.

```typescript
let data: any = "hello";

data = 10;
data = true;
```

Since TypeScript does not check types here, it behaves like **normal JavaScript**.

⚠️ Avoid using `any` unless absolutely necessary.

---

## Unknown (Better than Any)

`unknown` is a **safer alternative to `any`**.

```typescript
let value: unknown = "hello";
```

You **must check the type before using it**.

Example:

```typescript
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## Void

Used when a function **does not return any value**.

```typescript
function logMessage(): void {
  console.log("Hello");
}
```

---

## Never

Used for functions that **never return a value**.

Example:

```typescript
function throwError(): never {
  throw new Error("Something went wrong");
}
```

This usually happens when a function:

- throws an error
- runs an infinite loop
