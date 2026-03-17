# Interface with Functions

## Example

```typescript
interface User {
  name: string;
  age: number;
  greet(): string;
}

const user: User = {
  name: "Utkarsh",
  age: 24,
  greet() {
    return "Hello " + this.name;
  }
};

console.log(user.greet());
```

---

## Easy Explanation

Here, the interface is not only defining **data (properties)** but also **behavior (function)**.

### Step-by-step:

- `name: string` → user must have a name  
- `age: number` → user must have age  
- `greet(): string` → user must have a function called `greet` that returns a string  

---

## How Object Follows Interface

```typescript
const user: User = { ... }
```

This means the object **must follow all rules** defined in the interface.

So it includes:

- name ✔  
- age ✔  
- greet() function ✔  

---

## Inside greet()

```typescript
greet() {
  return "Hello " + this.name;
}
```

- `this.name` → refers to the object's own name  
- It returns a **greeting message**

---

## Output

```typescript
Hello Utkarsh
```

---

## Key Understanding

- Interfaces can define **functions also**
- Objects must implement both **properties + methods**
- Helps in creating **structured and predictable code**

---

## Real Life Analogy

Interface = **Rules**

User object = **Person following rules**

Rules say:
- must have name  
- must have age  
- must have greet function  

So the object **must follow all of them**
