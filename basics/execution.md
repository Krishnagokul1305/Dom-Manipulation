# JavaScript Execution Explained

## 1. JavaScript Engine: How JS Executes Code

JavaScript is a single-threaded language that uses an engine (like Google's V8) to parse and execute code. It uses two main memory components:

### - Call Stack

The Call Stack is where the JS engine keeps track of what function is currently running. It works on a **LIFO (Last In First Out)** principle.

### - Memory Heap

This is where memory is allocated for objects and functions. It is an unstructured memory pool used for storing reference types.

---

## 2. Execution Context

Every time a function is invoked, a new Execution Context is created.

### Types of Execution Contexts:

- **Global Execution Context (GEC)** – Created by default.
- **Function Execution Context (FEC)** – Created when a function is invoked.
- **Eval Execution Context** – Rarely used.

### Phases of Execution Context:

1. **Creation Phase:**

   - `this` is determined (in global, it’s `window` in browsers).
   - Lexical environment is created.
   - Variable declarations (`var`) are hoisted and initialized with `undefined`.
   - Function declarations are hoisted with their definitions.

2. **Execution Phase:**
   - Code is executed line by line.
   - Variables are assigned values.
   - Functions are invoked.

### Example: Execution Context Step by Step

```js
var x = 10;
function add(y) {
  var result = x + y;
  return result;
}
var sum = add(5);
console.log(sum);
```

#### Step-by-step Execution:

**Step 1: Global Execution Context (GEC) is created and pushed to the Call Stack.**

- In the **Creation Phase**:

  - `this` is set to `window` (in browsers).
  - `x` is declared and initialized to `undefined`.
  - `add` is hoisted with its full function body.
  - `sum` is declared and initialized to `undefined`.

- In the **Execution Phase**:
  - `x = 10`
  - `add(5)` is invoked → new Function Execution Context (FEC) is created.

**Step 2: Function Execution Context for `add(5)` is created and pushed to the Call Stack.**

- In the **Creation Phase**:

  - `arguments` object is created.
  - `y` is declared with value `5`.
  - `result` is declared with value `undefined`.

- In the **Execution Phase**:
  - `result = x + y = 10 + 5 = 15`
  - `return 15`
  - Function context is popped off the Call Stack.

**Step 3: Back in GEC:**

- `sum = 15`
- `console.log(sum)` prints **15**

---

## 3. Hoisting

Hoisting is JS's default behavior of moving declarations to the top of their scope.

### Example:

```js
console.log(a); // undefined
var a = 10;
```

Function declarations are hoisted fully:

```js
sayHello(); // Works
function sayHello() {
  console.log("Hello");
}
```

Function expressions are not hoisted with their body:

```js
sayHi(); // TypeError
var sayHi = function () {
  console.log("Hi");
};
```

---

## 4. Temporal Dead Zone (TDZ)

TDZ is the period between the hoisting of a `let` or `const` variable and its initialization.

```js
console.log(b); // ReferenceError
let b = 5;
```

---

## 5. Function Declarations vs Expressions vs Arrow Functions

### Function Declaration

```js
function greet() {
  console.log("Hello");
}
```

- Hoisted with definition.
- Has its own `this` context.

### Function Expression

```js
const greet = function () {
  console.log("Hello");
};
```

- Not hoisted with definition.
- Has its own `this`.

### Arrow Function

```js
const greet = () => {
  console.log("Hello");
};
```

- Not hoisted.
- **Does not** have its own `this` – inherits from the surrounding context.

---

## 6. Behavior of `this`

### Global Context

```js
console.log(this); // window (in browser)
```

### Inside Object Method

```js
const obj = {
  name: "JS",
  sayName: function () {
    console.log(this.name); // JS
  },
};
```

### Arrow Function in Object

```js
const obj = {
  name: "JS",
  sayName: () => {
    console.log(this.name); // undefined
  },
};
```

- `this` is inherited from the global scope (or outer lexical scope).

### Nested/Inner Function

```js
const obj = {
  name: "JS",
  sayName: function () {
    function inner() {
      console.log(this.name); // undefined (in non-strict mode: window.name)
    }
    inner();
  },
};
```

- To preserve context:

```js
const obj = {
  name: "JS",
  sayName: function () {
    const inner = () => {
      console.log(this.name); // JS
    };
    inner();
  },
};
```

---

## Summary

| Feature            | Function Declaration | Function Expression | Arrow Function                   |
| ------------------ | -------------------- | ------------------- | -------------------------------- |
| Hoisted            | Yes                  | No                  | No                               |
| Has its own `this` | Yes                  | Yes                 | No                               |
| Used in objects    | Good                 | Good                | Use with caution                 |
| Best for methods   | Yes                  | Yes                 | No (unless using lexical `this`) |

---

Use the right type of function based on the behavior of `this` you need and whether hoisting matters in your use case.
