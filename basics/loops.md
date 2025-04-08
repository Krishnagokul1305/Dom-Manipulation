# JavaScript Loops - Complete Guide

## Introduction

Loops in JavaScript allow you to execute a block of code repeatedly under certain conditions. They are essential for tasks like iterating over arrays, objects, or executing code multiple times.

## 1. for Loop

Use when you know how many times you want to loop.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 2. while Loop

Use when you want to loop until a condition is no longer true.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## 3. do...while Loop

Executes at least once before checking the condition.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## 4. for...of Loop

Used to iterate over iterable objects like arrays, strings, maps, sets.

```js
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}

const str = "hello";
for (const char of str) {
  console.log(char);
}
```

## 5. for...in Loop

Used to iterate over the enumerable properties of an object.

```js
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, person[key]);
}
```

## 6. Array Methods as Loops

### forEach

```js
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));
```

### map

```js
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

### filter

```js
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2]
```

### reduce

```js
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6
```

## Loop Control Statements

### break

Terminates the loop early.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

### continue

Skips the current iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

## Summary Table

| Loop Type    | Syntax Example                 | Best Use Case                         |
| ------------ | ------------------------------ | ------------------------------------- |
| `for`        | `for (let i = 0; i < n; i++)`  | Known number of iterations            |
| `while`      | `while (condition)`            | Loop until condition is false         |
| `do...while` | `do { } while (condition)`     | Run at least once                     |
| `for...of`   | `for (const item of iterable)` | Iterating over arrays, strings        |
| `for...in`   | `for (const key in object)`    | Iterating over object keys            |
| `forEach`    | `arr.forEach(callback)`        | Executing function on each array item |
| `map`        | `arr.map(callback)`            | Transforming each element in array    |
| `filter`     | `arr.filter(callback)`         | Filtering items from array            |
| `reduce`     | `arr.reduce(callback, init)`   | Reducing array to single value        |
| `break`      | Inside any loop                | Exit loop early                       |
| `continue`   | Inside any loop                | Skip iteration                        |
