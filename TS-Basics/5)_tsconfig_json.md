# 5. tsconfig.json (Important)

`tsconfig.json` is the **configuration file for the TypeScript compiler**.  
It tells TypeScript **how to compile `.ts` files into JavaScript**.

This file helps you control things like:

- JavaScript version output
- Module system
- Strict type checking
- Output folders
- Project compilation rules

---

## Create tsconfig.json

```bash
tsc --init
```

This command generates a default **tsconfig.json** file in your project.

---

## Example Configuration

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  }
}
```

---

## Important Options

| Option | Meaning |
|------|------|
| target | Specifies which JavaScript version TypeScript should compile to |
| module | Defines the module system (CommonJS, ESNext, etc.) |
| strict | Enables strict type checking for safer code |
| outDir | Specifies the folder where compiled JavaScript files will be stored |

---

## Explanation of Options

### target
Determines the **JavaScript version** the code will be converted into.

Example:

```json
"target": "ES6"
```

TypeScript will convert modern code into **ES6 compatible JavaScript**.

Common targets:

- ES5
- ES6
- ES2017
- ES2020

---

### module
Defines the **module system** used in the project.

Example:

```json
"module": "commonjs"
```

Common module types:

- commonjs → used in **Node.js**
- esnext → used in **modern frontend apps**
- amd
- umd

---

### strict
Enables **all strict type-checking options**.

Example:

```json
"strict": true
```

This helps catch problems like:

- implicit `any` types
- null errors
- unsafe assignments

It makes your code **much safer and cleaner**.

---

### outDir
Specifies where the **compiled JavaScript files will be stored**.

Example:

```json
"outDir": "./dist"
```

Project structure example:

```
project
│
├── src
│   └── app.ts
│
├── dist
│   └── app.js
│
└── tsconfig.json
```

All compiled `.js` files will go into the **dist folder**.

---

## Why tsconfig.json is Important

Without this file, TypeScript compiles files **one by one**.

With `tsconfig.json`, you can:

- manage **large projects easily**
- maintain **consistent compiler settings**
- compile the **entire project with one command**

```bash
tsc
```

This will compile **all TypeScript files in the project automatically**.
