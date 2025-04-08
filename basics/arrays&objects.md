# JavaScript Arrays - Complete Guide

## Introduction

An **array** in JavaScript is a data structure that can hold multiple values at once. Arrays are used to store lists of data and provide several built-in methods to manipulate and access their contents.

```js
const fruits = ["Apple", "Banana", "Cherry"];
```

## Creating Arrays

```js
let arr1 = [1, 2, 3]; // Literal notation
let arr2 = new Array(1, 2, 3); // Constructor
```

## Accessing Array Elements

```js
console.log(fruits[0]); // Output: "Apple"
```

```js
19 + [1, 2, 3] => 1,2,319
[1,2,3] - 19 =>Nan
```

## Array Properties

| Property | Description                                 |
| -------- | ------------------------------------------- |
| length   | Returns the number of elements in the array |

```js
console.log(fruits.length); // 3
```

## Common Array Methods with Examples

| Method        | Description                                               | Return Type                | Example                                |
| ------------- | --------------------------------------------------------- | -------------------------- | -------------------------------------- |
| push()        | Adds element(s) to the end of the array                   | Number (new length)        | `[1,2].push(3)` → `3`                  |
| pop()         | Removes the last element                                  | Any (removed element)      | `[1,2,3].pop()` → `3`                  |
| shift()       | Removes the first element                                 | Any (removed element)      | `[1,2,3].shift()` → `1`                |
| unshift()     | Adds element(s) to the beginning                          | Number (new length)        | `[1,2].unshift(0)` → `3`               |
| concat()      | Combines two or more arrays                               | Array                      | `[1,2].concat([3,4])` → `[1,2,3,4]`    |
| join()        | Joins all elements into a string                          | String                     | `["a","b","c"].join("-")` → `'a-b-c'`  |
| slice()       | Returns a portion of the array                            | Array                      | `[1,2,3,4].slice(1,3)` → `[2,3]`       |
| splice()      | Adds/removes elements at specified index                  | Array (removed elements)   | `[1,2,3].splice(1,1)` → `[2]`          |
| indexOf()     | Returns the first index of a specified value              | Number                     | `[1,2,3].indexOf(2)` → `1`             |
| lastIndexOf() | Returns the last index of a specified value               | Number                     | `[1,2,1].lastIndexOf(1)` → `2`         |
| includes()    | Checks if array includes a specified value                | Boolean                    | `[1,2,3].includes(2)` → `true`         |
| forEach()     | Executes a function for each array element                | undefined                  | `[1,2].forEach(x => console.log(x))`   |
| map()         | Creates a new array with function applied to each element | Array                      | `[1,2,3].map(x => x * 2)` → `[2,4,6]`  |
| filter()      | Creates a new array with elements that pass the test      | Array                      | `[1,2,3].filter(x => x > 1)` → `[2,3]` |
| reduce()      | Reduces array to a single value                           | Any                        | `[1,2,3].reduce((a,b) => a + b)` → `6` |
| find()        | Returns the first element that passes a test              | Any (element or undefined) | `[1,2,3].find(x => x > 1)` → `2`       |
| findIndex()   | Returns index of first element that passes a test         | Number                     | `[1,2,3].findIndex(x => x > 1)` → `1`  |
| sort()        | Sorts the array in place                                  | Array                      | `[3,1,2].sort()` → `[1,2,3]`           |
| reverse()     | Reverses the array in place                               | Array                      | `[1,2,3].reverse()` → `[3,2,1]`        |
| flat()        | Flattens nested arrays                                    | Array                      | `[[1,2],[3,4]].flat()` → `[1,2,3,4]`   |
| fill()        | Fills elements with a static value                        | Array                      | `[1,2,3].fill(0)` → `[0,0,0]`          |
| every()       | Checks if all elements pass the test                      | Boolean                    | `[1,2,3].every(x => x > 0)` → `true`   |
| some()        | Checks if at least one element passes the test            | Boolean                    | `[1,2,3].some(x => x > 2)` → `true`    |

## Example Usage

```js
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// find
const firstEven = numbers.find((n) => n % 2 === 0); // 2

// sort
const sorted = [3, 1, 4].sort(); // [1, 3, 4]
```

## Conclusion

JavaScript arrays are powerful and flexible. With a wide variety of methods, you can manipulate and analyze data in many ways. Understanding these methods and their return types is essential for effective JavaScript programming.

# JavaScript Objects - Basic Guide

## What is an Object?

An object in JavaScript is a collection of properties, where each property is a key-value pair. The keys (also known as properties) are strings, and the values can be of any data type, including other objects.

```js
const person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};
```

## Accessing Properties

- **Dot notation**: `person.name`
- **Bracket notation**: `person['age']`

## Adding or Updating Properties

```js
person.city = "New York";
person.age = 26;
```

## Deleting Properties

```js
delete person.isStudent;
```

## Looping Through an Object

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

## Nesting Objects

```js
const user = {
  name: "Bob",
  address: {
    city: "LA",
    zip: 90001,
  },
};
console.log(user.address.city); // LA
```

## Common Object Methods

| Method                       | Description                            | Returns        | Example                                   |
| ---------------------------- | -------------------------------------- | -------------- | ----------------------------------------- |
| `Object.keys(obj)`           | Returns array of keys                  | Array          | `Object.keys(person)` → `['name', 'age']` |
| `Object.values(obj)`         | Returns array of values                | Array          | `Object.values(person)`                   |
| `Object.entries(obj)`        | Returns array of [key, value] pairs    | Array          | `Object.entries(person)`                  |
| `Object.assign(target, src)` | Copies properties from src to target   | New object     | `Object.assign({}, person)`               |
| `Object.hasOwnProperty()`    | Checks if object contains specific key | Boolean        | `person.hasOwnProperty('name')` → `true`  |
| `Object.freeze(obj)`         | Prevents changes to object             | Frozen object  | `Object.freeze(person)`                   |
| `Object.seal(obj)`           | Prevents adding/removing properties    | Sealed object  | `Object.seal(person)`                     |
| `delete obj.key`             | Removes a property from the object     | Boolean (true) | `delete person.age` → `true`              |

## Checking Property Existence

```js
"name" in person; // true
person.hasOwnProperty("age"); // true
```

## Converting Objects

- **To JSON**:

```js
const str = JSON.stringify(person);
```

- **From JSON**:

```js
const obj = JSON.parse('{"name":"Alice","age":26}');
```

## Summary

- Objects store data as key-value pairs.
- You can access, update, delete, and loop through properties.
- JavaScript provides built-in methods to work with object keys, values, and structure.
- Use JSON methods to convert objects to and from strings.

Objects are fundamental in JavaScript and are used everywhere in real-world applications.
