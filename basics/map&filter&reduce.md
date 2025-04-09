# JavaScript Array Methods: map, filter, reduce, flat, flatMap, Array.from, slice, splice, forEach, some, every

## Introduction

JavaScript arrays come with powerful built-in methods for processing data. The most commonly used methods are `map`, `filter`, and `reduce`. Additionally, methods like `flat`, `flatMap`, `Array.from`, `slice`, `splice`, `forEach`, `some`, and `every` offer flexible tools to manipulate and evaluate arrays.

---

## 1. `map()`

### Purpose:

Transforms each element in an array and returns a **new array** with the transformed values.

### Syntax:

```js
array.map((element, index, array) => {
  // return new value
});
```

### Example:

```js
const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]
```

---

## 2. `filter()`

### Purpose:

Creates a **new array** with all elements that pass the given condition.

### Syntax:

```js
array.filter((element, index, array) => {
  return condition;
});
```

### Example:

```js
const nums = [1, 2, 3, 4];
const evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]
```

---

## 3. `reduce()`

### Purpose:

Reduces an array to a **single value**.

### Syntax:

```js
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

### Example:

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, curr) => sum + curr, 0);
console.log(total); // 10
```

### Advanced Combinations:

#### Accumulator as Number

```js
const arr = [5, 10, 15];
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 30
```

#### Accumulator as Array

```js
const arr = [1, 2, 3];
const doubled = arr.reduce((acc, cur) => {
  acc.push(cur * 2);
  return acc;
}, []); // [2, 4, 6]
```

#### Accumulator as Object (Grouping)

```js
const users = [{ role: "admin" }, { role: "user" }, { role: "admin" }];
const grouped = users.reduce((acc, cur) => {
  acc[cur.role] = (acc[cur.role] || 0) + 1;
  return acc;
}, {}); // { admin: 2, user: 1 }
```

#### Building a Lookup Table

```js
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
];
const lookup = items.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {}); // { 1: 'Apple', 2: 'Banana' }
```

#### Removing Duplicates

```js
const arr = [1, 2, 2, 3];
const unique = arr.reduce((acc, cur) => {
  if (!acc.includes(cur)) acc.push(cur);
  return acc;
}, []); // [1, 2, 3]
```

---

## 4. `flat()`

### Purpose:

Flattens nested arrays into a single-level array.

### Example:

```js
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]
```

---

## 5. `flatMap()`

### Purpose:

Maps each element and flattens the result into a new array.

### Example:

```js
const arr = [1, 2, 3];
console.log(arr.flatMap((n) => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
```

---

## 6. `Array.from()`

### Purpose:

Creates a new array instance from an array-like or iterable object.

### Example:

```js
const str = "hello";
console.log(Array.from(str)); // ['h', 'e', 'l', 'l', 'o']
```

---

## 7. `slice()`

### Purpose:

Returns a shallow copy of a portion of an array.

### Example:

```js
const arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```

---

## 8. `splice()`

### Purpose:

Changes contents of an array by removing or replacing elements.

### Example:

```js
const arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4]
```

---

## 9. `forEach()`

### Purpose:

Executes a function for each element in an array.

### Example:

```js
[1, 2, 3].forEach((num) => console.log(num));
```

---

## 10. `some()`

### Purpose:

Checks if **at least one** element satisfies the condition.

### Example:

```js
const arr = [1, 2, 3];
console.log(arr.some((n) => n > 2)); // true
```

---

## 11. `every()`

### Purpose:

Checks if **all** elements satisfy the condition.

### Example:

```js
const arr = [1, 2, 3];
console.log(arr.every((n) => n > 0)); // true
```

---

## Chaining Example

```js
const nums = [1, 2, 3, 4, 5];
const result = nums
  .filter((n) => n % 2 !== 0)
  .map((n) => n * 10)
  .reduce((a, b) => a + b, 0);

console.log(result); // 90
```

---

## Comparison Table

| Method     | Purpose                            | Returns      | Mutates Original? | Callback Required? | Common Use Cases               |
| ---------- | ---------------------------------- | ------------ | ----------------- | ------------------ | ------------------------------ |
| `map()`    | Transform elements                 | New array    | No                | Yes                | Transformation, formatting     |
| `filter()` | Keep elements that match condition | New array    | No                | Yes                | Filtering lists, validation    |
| `reduce()` | Convert array to single value      | Single value | No                | Yes                | Aggregation, summary, grouping |

---

## Chaining Example

```js
const nums = [1, 2, 3, 4, 5];
const result = nums
  .filter((n) => n % 2 !== 0) // [1, 3, 5]
  .map((n) => n * 10) // [10, 30, 50]
  .reduce((a, b) => a + b, 0); // 90

console.log(result); // 90
```

---

## Conclusion

The `map`, `filter`, and `reduce` methods are essential for data transformation and processing in JavaScript. Understanding their syntax, behavior, and use cases will help you write cleaner, more expressive, and more efficient code.
