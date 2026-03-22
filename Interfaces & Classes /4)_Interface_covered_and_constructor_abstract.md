# 4. Interface vs Type (VERY IMPORTANT)

This **WILL be asked in interviews**.

## Interview Answer

Interface is mainly used for **defining object structure**, while `type` is more **flexible** and can define **unions, primitives, and complex types**.

---

## Quick Difference

| Interface | Type |
|----------|------|
| Used for objects | Used for anything |
| Can extend | Uses intersections (`&`) |
| More OOP friendly | More flexible |

---

# 5. Classes in TypeScript

TypeScript supports **OOP (Object-Oriented Programming)** like Java/C++.

## Example

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return "Hello " + this.name;
  }
}
```

---

## Usage

```typescript
const u1 = new User("Utkarsh", 24);
console.log(u1.greet());
```

---

## Easy Explanation

- `class` → blueprint  
- `constructor` → initializes values  
- `this` → refers to current object  
- `greet()` → method  

---

# 6. Access Modifiers (Important)

## public (default)

```typescript
class User {
  public name: string;
}
```

✔ Accessible everywhere  

---

## private

```typescript
class User {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }
}
```

❌ Cannot access outside the class  

---

## protected

- Accessible inside **class + child class**
- Not accessible outside  

---

# 7. Shorthand Constructor (Clean Code)

```typescript
class User {
  constructor(public name: string, private age: number) {}
}
```

✔ Automatically creates and assigns properties  
✔ Cleaner code  

---

# 8. Readonly

```typescript
class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

❌ Cannot change after initialization  

---

# 9. Implementing Interface in Class

```typescript
interface User {
  name: string;
  age: number;
}

class Person implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## Explanation

- `implements` → class must follow interface rules  
- If any property is missing → ❌ Error  

---

# 10. Abstract Class (Advanced + Interview)

Used as a **base class**.

## Example

```typescript
abstract class Animal {
  abstract makeSound(): void;
}
```

---

## Child Class

```typescript
class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}
```

---

## Key Point

- Abstract class **cannot be instantiated**
- Child class **must implement abstract methods**

---

# Phase 3 Practice

## Create File

```
class.ts
```

---

## Code

```typescript
interface User {
  name: string;
  age: number;
}

class Person implements User {
  constructor(public name: string, public age: number) {}

  greet(): string {
    return "Hello " + this.name;
  }
}

const p1 = new Person("Utkarsh", 24);
console.log(p1.greet());
```

---

## Output

```
Hello Utkarsh
```
