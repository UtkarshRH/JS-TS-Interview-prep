# What is an Interface?

## Interview Answer (Simple)

An **interface** defines the **structure of an object**.  
It ensures that an object follows a **specific contract (rules)**.

---

## Easy Explanation

Think of an interface like a **blueprint or rule book**.

It tells:

- what properties an object should have  
- what type those properties should be  

Any object that follows this structure is **valid**.

---

## Example

```typescript
interface User {
  name: string;
  age: number;
}
```

### Explanation

- `name: string` → user must have a name of type string  
- `age: number` → user must have age of type number  

---

## Usage

```typescript
const user: User = {
  name: "Utkarsh",
  age: 24
};
```

---

## What Happens If You Break Rules?

```typescript
const user: User = {
  name: "Utkarsh"
};
```

❌ Error → because `age` is missing  

---

## Key Points

- Interface defines **object structure**
- It acts like a **contract**
- Helps in **type safety**
- Makes code **clean and maintainable**
