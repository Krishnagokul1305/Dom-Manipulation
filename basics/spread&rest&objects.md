# JavaScript Modern Features Explained

## 1. Destructuring

Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

### Array Destructuring:

```js
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

### Object Destructuring:

```js
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Alice
```

## 2. Rest Operator (`...`)

Used to collect the remaining elements into an array or object.

### In Arrays:

```js
const [a, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

### In Objects:

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }
```

## 3. Spread Operator (`...`)

Used to spread elements of an array or object.

### In Arrays:

```js
const arr = [1, 2];
const newArr = [...arr, 3];
console.log(newArr); // [1, 2, 3]
```

### In Objects:

```js
const obj = { a: 1 };
const newObj = { ...obj, b: 2 };
console.log(newObj); // { a: 1, b: 2 }
```

## 4. Nullish Coalescing (`??`)

Returns the right-hand side value only if the left is `null` or `undefined` (not falsy).

```js
const value = null ?? "default";
console.log(value); // "default"
```

## 5. Optional Chaining (`?.`)

Prevents runtime errors when accessing deeply nested properties.

```js
const user = { profile: { name: "Bob" } };
console.log(user.profile?.name); // Bob
console.log(user.contact?.email); // undefined
```

## 6. Enhanced Object Literals

Allow creating objects more concisely and with dynamic properties.

### Shorthand Property:

```js
const name = "Tom";
const user = { name };
```

### Method Definition:

```js
const obj = {
  greet() {
    console.log("Hello");
  },
};
```

### Computed Property Names:

```js
const prop = "age";
const person = {
  [prop]: 30,
};
```

## 7. `Object.keys`, `Object.values`, `Object.entries`

Used to work with object properties and values.

```js
const user = { name: "Ann", age: 22 };

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Ann", 22]
console.log(Object.entries(user)); // [["name", "Ann"], ["age", 22]]
```

These methods are useful for iterating over objects:

```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```
