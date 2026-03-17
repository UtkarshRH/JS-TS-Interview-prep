# Extending Interfaces

You can **reuse and extend interfaces** to avoid repeating code.

---

## Example

```typescript
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

---

## Easy Explanation

Here:

- `User` has → `name`
- `Admin` **extends User**, so it automatically gets:
  - `name` (from User)
  - `role` (its own property)

So `Admin` = **User + extra properties**

---

## Usage

```typescript
const admin: Admin = {
  name: "Utkarsh",
  role: "SuperAdmin"
};
```

---

## What’s Happening?

- `Admin` must include:
  - `name` ✔ (inherited from User)
  - `role` ✔ (defined in Admin)

---

## Key Benefits

- ✔ Code reusability  
- ✔ Avoid duplication  
- ✔ Cleaner structure  
- ✔ Easy to scale  

---

## Real Life Example

User → Basic details  
Admin → User + extra permissions  

So instead of rewriting everything, we **extend and add only what's needed**.
