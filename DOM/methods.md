# DOM Methods

## `insertAdjacentHTML()`

### ✅ Syntax:

```js
element.insertAdjacentHTML(position, htmlString);
```

### ✅ Common Positions:

- `'beforebegin'`: Before the element itself
- `'afterbegin'`: Inside the element, before its first child
- `'beforeend'`: Inside the element, after its last child
- `'afterend'`: After the element itself

---

### 📌 Example Setup:

```html
<div id="box">
  <p>Existing Content</p>
</div>
```

### 1. `beforebegin`

```js
const box = document.getElementById("box");
box.insertAdjacentHTML("beforebegin", "<h2>Before Box</h2>");
```

🔍 **Resulting HTML**:

```html
<h2>Before Box</h2>
<div id="box">
  <p>Existing Content</p>
</div>
```

### 2. `afterbegin`

```js
box.insertAdjacentHTML("afterbegin", "<p>Start Inside</p>");
```

🔍 **Resulting HTML**:

```html
<div id="box">
  <p>Start Inside</p>
  <p>Existing Content</p>
</div>
```

### 3. `beforeend`

```js
box.insertAdjacentHTML("beforeend", "<p>End Inside</p>");
```

🔍 **Resulting HTML**:

```html
<div id="box">
  <p>Existing Content</p>
  <p>End Inside</p>
</div>
```

### 4. `afterend`

```js
box.insertAdjacentHTML("afterend", "<h2>After Box</h2>");
```

🔍 **Resulting HTML**:

```html
<div id="box">
  <p>Existing Content</p>
</div>
<h2>After Box</h2>
```

---

## `append()`

### ✅ Syntax:

```js
element.append(node1, node2, ...);
```

### ✅ Example:

```js
const container = document.getElementById("box");
const p = document.createElement("p");
p.textContent = "Hello World!";
container.append(p);
```

### 🧠 Use Case:

Best when working with **DOM elements or text nodes**, not raw HTML strings.

### 🔍 Sample HTML Output:

```html
<div id="box">
  <p>Existing Content</p>
  <p>Hello World!</p>
</div>
```

Use `insertAdjacentHTML` for inserting raw HTML at specific positions, and use `append()` when you want to add DOM nodes or simple text to the end of an element.
