# 📘 JavaScript Basics: Introduction & Primitive Data Types

## 🧠 Introduction to JavaScript

JavaScript is a **high-level**, **interpreted** programming language used primarily for creating interactive and dynamic content on the web. It is one of the core technologies of the web, alongside **HTML** and **CSS**.

### 🔑 Key Features:

- **Client-Side Scripting**: Runs in web browsers to enhance user interfaces.
- **Dynamically Typed**: Variables can hold any type of value and can change over time.
- **Multi-Paradigm**: Supports procedural, object-oriented, and functional programming.
- **First-Class Functions**: Functions are treated like variables.
- **Event-Driven**: Executes code in response to user actions or events.

---

## 📦 JavaScript Primitive Data Types

Primitive data types are the most basic building blocks in JavaScript. They are **immutable** and stored by **value**.

### 1. 📝 `String`

Represents a sequence of characters (text).

```js
let name = "Alice";
```

### 2. 🔢 `Number`

Represents both integers and floating-point numbers.

```js
let age = 25;
let price = 99.99;
```

### 3. ✅ `Boolean`

Represents a logical entity and can have two values: `true` or `false`.

```js
let isLoggedIn = true;
```

### 4. ❓ `Undefined`

A variable that has been declared but not assigned a value.

```js
let score;
console.log(score); // undefined
```

### 5. 🚫 `Null`

Represents the intentional absence of any object value.

```js
let data = null;
```

### 6. 🧮 `BigInt`

Used to represent integers larger than the `Number` type can safely handle.

```js
let bigNum = 1234567890123456789012345678901234567890n;
```

### 7. 🆔 `Symbol`

Used to create unique identifiers, often useful in objects.

```js
let sym = Symbol("id");
```

---

## 🔍 Type Checking

You can use the `typeof` operator to check the type of a value:

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a known JavaScript quirk or bug)
typeof 123n; // "bigint"
typeof Symbol(); // "symbol"
```

---

## ✅ Summary

| Type      | Example                 | `typeof` Result  |
| --------- | ----------------------- | ---------------- |
| String    | `"Hello"`               | `string`         |
| Number    | `42`, `3.14`            | `number`         |
| Boolean   | `true`, `false`         | `boolean`        |
| Undefined | `let x;`                | `undefined`      |
| Null      | `let y = null;`         | `object` (quirk) |
| BigInt    | `12345678901234567890n` | `bigint`         |
| Symbol    | `Symbol("desc")`        | `symbol`         |

---

# 🔄 JavaScript: `var`, `let`, and `const`

JavaScript provides three ways to declare variables: `var`, `let`, and `const`. Each has its own behavior and best-use scenarios.

---

## 📌 `var` (Old School - ES5 and before)

### ✅ Features:

- Function-scoped.
- Can be re-declared and updated.
- Hoisted (moved to the top of the function or global scope), but initialized as `undefined`.

### ⚠️ Caution:

- Prone to bugs due to lack of block scope.
- Can be re-declared within the same scope.

### 📄 Example:

```js
function testVar() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}
```

---

## 🔄 `let` (Introduced in ES6)

### ✅ Features:

- Block-scoped (limited to `{}` block).
- Can be updated but **not re-declared** in the same scope.
- Hoisted but **not initialized** (temporal dead zone).

### 📄 Example:

```js
function testLet() {
  let x = 1;
  if (true) {
    let x = 2; // Different variable!
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

---

## 🔒 `const` (Also Introduced in ES6)

### ✅ Features:

- Block-scoped.
- **Cannot be updated or re-declared.**
- Must be initialized at the time of declaration.
- For objects and arrays, the reference is constant, but content can change.

### 📄 Example:

```js
const x = 10;
// const y; // ❌ Error because const variable must be initializes
// x = 20; // ❌ Error

const obj = { a: 1 };
obj.a = 2; // ✅ Allowed
console.log(obj); // { a: 2 }
```

---

## 🧠 Summary Table

| Feature          | `var`       | `let`       | `const`     |
| ---------------- | ----------- | ----------- | ----------- |
| Scope            | Function    | Block       | Block       |
| Re-declaration   | ✅ Yes      | ❌ No       | ❌ No       |
| Re-assignment    | ✅ Yes      | ✅ Yes      | ❌ No       |
| Hoisted          | ✅ Yes      | ✅ Yes      | ✅ Yes      |
| Initialized?     | `undefined` | ❌ No (TDZ) | ❌ No (TDZ) |
| Must initialize? | ❌ No       | ❌ No       | ✅ Yes      |

---

## ✅ Best Practices

- Use `let` when the variable value changes.
- Use `const` by default for constants and values that should not change.
- Avoid `var` in modern code.

---

# ➕ JavaScript Operators

Operators are used to perform operations on variables and values. JavaScript includes a variety of operators grouped by their functionality.

---

## 🧮 1. Arithmetic Operators

Used for basic math operations.

| Operator | Description         | Example       |
| -------- | ------------------- | ------------- |
| `+`      | Addition            | `5 + 2 = 7`   |
| `-`      | Subtraction         | `5 - 2 = 3`   |
| `*`      | Multiplication      | `5 * 2 = 10`  |
| `/`      | Division            | `5 / 2 = 2.5` |
| `%`      | Modulus (Remainder) | `5 % 2 = 1`   |
| `**`     | Exponentiation      | `2 ** 3 = 8`  |
| `++`     | Increment           | `x++`         |
| `--`     | Decrement           | `x--`         |

---

## ⚖️ 2. Comparison Operators

Used to compare values.

| Operator | Description         | Example               |
| -------- | ------------------- | --------------------- |
| `==`     | Equal to            | `5 == "5"` → `true`   |
| `===`    | Strict equal to     | `5 === "5"` → `false` |
| `!=`     | Not equal to        | `5 != "5"` → `false`  |
| `!==`    | Strict not equal to | `5 !== "5"` → `true`  |
| `>`      | Greater than        | `5 > 3` → `true`      |
| `<`      | Less than           | `5 < 3` → `false`     |
| `>=`     | Greater or equal    | `5 >= 5` → `true`     |
| `<=`     | Less or equal       | `5 <= 3` → `false`    |

---

## 🧠 3. Logical Operators

Used for boolean logic.

| Operator | Description | Example                   |
| -------- | ----------- | ------------------------- | ---------- | ----- | --- | ------------- |
| `&&`     | Logical AND | `true && false` → `false` |
| `        |             | `                         | Logical OR | `true |     | false`→`true` |
| `!`      | Logical NOT | `!true` → `false`         |

---

## 🟰 4. Assignment Operators

Used to assign values to variables.

| Operator | Description         | Example                |
| -------- | ------------------- | ---------------------- |
| `=`      | Assign              | `x = 10`               |
| `+=`     | Add and assign      | `x += 5` → `x = x + 5` |
| `-=`     | Subtract and assign | `x -= 3`               |
| `*=`     | Multiply and assign | `x *= 2`               |
| `/=`     | Divide and assign   | `x /= 4`               |
| `%=`     | Modulus and assign  | `x %= 2`               |
| `**=`    | Exponent and assign | `x **= 2`              |

---

## 🧰 5. Other Useful Operators

### 🧪 Type Operators

- `typeof`: Returns the type of a variable.

```js
typeof 5; // "number"
```

- `instanceof`: Checks if an object is an instance of a class.

```js
[] instanceof Array; // true
```

### ❓ Ternary Operator

Shortcut for `if...else`.

```js
let result = age >= 18 ? "Adult" : "Minor";
```

---

# 🧩 Template Literals in JavaScript

Template literals are a modern way to handle strings in JavaScript, introduced in ES6. They make it easier to embed variables and expressions inside strings, and support multi-line strings.

---

## ✅ Syntax

Use backticks (`` ` ``) instead of quotes:

```js
`string text``string text ${expression} string text`;
```

## 📄 Example

```js
const name = "Alice";
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: Hello, my name is Alice and I am 25 years old.
```

# 🔄 Type Conversion vs Type Coercion in JavaScript

Understanding how JavaScript handles different data types is key to avoiding unexpected bugs. Let's break down **Type Conversion** and **Type Coercion**.

---

## 🔧 Type Conversion (Explicit)

You **manually** convert a value from one type to another using built-in functions.

### 📌 Examples:

```js
String(123); // "123"
Number("456"); // 456
Boolean(0); // false
parseInt("10.5"); // 10
parseFloat("10.5"); // 10.5
```

> ✅ You control the conversion — it's deliberate and predictable.

---

## 🎭 Type Coercion (Implicit)

JavaScript **automatically converts** data types when it thinks it's necessary.

### 📌 Examples:

```js
"5" + 1; // "51"  → string (coerced)
"5" - 1; // 4     → number (coerced)
true + 1; // 2     → boolean → number
null + 1; // 1     → null → 0
undefined + 1; // NaN   → undefined → NaN
```

> ⚠️ Coercion can lead to **unexpected results** if not understood well.

---

## 🔍 Loose vs Strict Comparison

- `==` allows coercion
- `===` does **not** allow coercion

```js
"5" == 5; // true   (coercion happens)
"5" === 5; // false  (different types)
```

---

## ✅ Summary

| Feature         | Type Conversion | Type Coercion              |
| --------------- | --------------- | -------------------------- |
| Who handles it? | You (explicit)  | JavaScript (implicit)      |
| Control level   | Full control    | Less control (be cautious) |
| Example         | `Number("10")`  | `"5" * 2 → 10`             |

# ⚙️ Functions in JavaScript

Functions are reusable blocks of code designed to perform a particular task. They help organize code into logical, manageable chunks.

---

## 🧠 Why Use Functions?

- Reusability: Write once, use multiple times.
- Modularity: Break code into smaller, manageable parts.
- Scope: Help manage variable access.

---

## 🛠️ Function Declaration

A standard way to define a function using the `function` keyword.

### ✅ Syntax:

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

### 📌 Usage:

```js
greet("Alice"); // "Hello, Alice!"
```

> ✅ Hoisted to the top of their scope.

---

## 📝 Function Expression

Functions assigned to a variable.

### ✅ Syntax:

```js
const greet = function (name) {
  return `Hi, ${name}!`;
};
```

### 📌 Usage:

```js
greet("Bob"); // "Hi, Bob!"
```

> ❌ Not hoisted. You must define them before use.

---

## 🔀 Types of Functions

### 1. **Named Function**

```js
function sayHello() {
  console.log("Hello");
}
```

### 2. **Anonymous Function**

```js
setTimeout(function () {
  console.log("This is anonymous");
}, 1000);
```

### 3. **Arrow Function** (ES6+)

```js
const add = (a, b) => a + b;
```

### 4. **Immediately Invoked Function Expression (IIFE)**

```js
(function () {
  console.log("IIFE runs immediately!");
})();
```

### 5. **Callback Function**

```js
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function (name) {
  console.log(`Welcome, ${name}`);
});
```

---

## 📌 Summary

- Use **function declarations** when you want hoisting.
- Use **function expressions** for more control over when the function is defined.
- Arrow functions provide concise syntax but differ in `this` behavior.
