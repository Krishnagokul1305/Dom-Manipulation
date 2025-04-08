# JavaScript Array Methods: map, filter, reduce

## Introduction

JavaScript arrays come with powerful built-in methods for processing data. The most commonly used methods are `map`, `filter`, and `reduce`. These methods help you work with arrays in a functional and readable way.

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

### Return Type:

- New array with the same length.

### Use Case:

- Converting data formats
- Updating objects in arrays

### Behavior:

- Does not mutate the original array.
- Always returns a new array.
- Can include `undefined` or `null` values if returned from callback.
- Executes the callback once for each element.

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

### Return Type:

- New array with elements that match the condition.

### Use Case:

- Filtering valid items
- Removing unwanted data

### Behavior:

- Does not mutate the original array.
- Returns a new array.
- Skips elements where the condition is false.
- Callback must return a truthy value to include the element.

---

## 3. `reduce()`

### Purpose:

Reduces an array to a **single value** by applying a function to each element (left to right).

### Syntax:

```js
array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);
```

### Example:

```js
const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, curr) => sum + curr, 0);
console.log(total); // 10
```

### Return Type:

- Any single value (number, object, string, etc.)

### Use Case:

- Summing numbers
- Grouping items
- Creating objects from arrays

### Behavior:

- Does not mutate the original array.
- Executes the reducer from left to right.
- Requires an initial value; if omitted, uses first array element and starts from second.
- Can return any data type.

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
