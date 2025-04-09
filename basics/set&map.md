# JavaScript Sets and Maps

## 1. `Set`

A `Set` is a collection of **unique values** (no duplicates allowed).

### Creating a Set

```js
const set = new Set([1, 2, 3, 3]);
console.log(set); // Set { 1, 2, 3 }
```

### Set Methods

- `add(value)` – Adds a value.
- `has(value)` – Checks if value exists.
- `delete(value)` – Deletes a value.
- `clear()` – Removes all values.
- `size` – Returns the count of values.

```js
const items = new Set();
items.add("apple");
items.add("banana");
items.add("apple");

console.log(items.has("banana")); // true
console.log(items.size); // 2
items.delete("apple");
items.clear();
```

### Iterating a Set

```js
for (const item of items) {
  console.log(item);
}
```

### Use Cases

- Removing duplicates from arrays:

```js
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3]
```

---

## 2. `Map`

A `Map` is a collection of key-value pairs with **ordered entries**. Keys can be **any type**.

### Creating a Map

```js
const map = new Map();
map.set("name", "Alice");
map.set(1, "one");
map.set(true, "yes");
```

### Map Methods

- `set(key, value)` – Adds or updates a key-value pair.
- `get(key)` – Retrieves the value for a key.
- `has(key)` – Checks for the key.
- `delete(key)` – Removes the key.
- `clear()` – Removes all entries.
- `size` – Returns the number of entries.

```js
console.log(map.get("name")); // Alice
console.log(map.has(1)); // true
map.delete(true);
```

### Iterating a Map

```js
for (const [key, value] of map) {
  console.log(`${key} => ${value}`);
}
```

### Use Cases

- Caching
- Storing metadata
- Tracking elements with complex keys

```js
const userVisits = new Map();
const user1 = { id: 1 };
userVisits.set(user1, 5);
console.log(userVisits.get(user1)); // 5
```

---

## 3. Differences Between Object and Map

| Feature     | Object                         | Map                     |
| ----------- | ------------------------------ | ----------------------- |
| Key Types   | Strings/Symbols                | Any type                |
| Order       | Not guaranteed                 | Insertion order         |
| Iteration   | Manual                         | Easy with loops         |
| Performance | Slower for frequent add/remove | Faster for frequent ops |

---

## 4. Do's and Don'ts

### ✅ Do:

- Use `Set` for uniqueness.
- Use `Map` for complex key-value storage.
- Use `for...of` or `forEach` to iterate Sets/Maps.

### ❌ Don't:

- Don’t use `Set` if duplicates are allowed.
- Don’t use `Object` when key types can be anything (like objects).
- Don’t rely on insertion order in regular objects.

---

## Summary

- `Set`: Unique, unordered values.
- `Map`: Key-value pairs, ordered, keys can be anything.
- Both offer cleaner, more performant alternatives to `Array` and `Object` in specific use cases.
