# JavaScript DOM Manipulation Basics

## Accessing Elements

### `document.getElementById()`

```js
document.getElementById("myId");
```

Finds an element by its ID.

### `document.querySelector()`

```js
document.querySelector(".myClass");
```

Returns the first element matching the selector.

### `document.querySelectorAll()`

```js
document.querySelectorAll("p");
```

Returns a NodeList of all elements matching the selector.

---

## Reading and Updating Content

### `textContent`

```js
document.getElementById("title").textContent = "New Title";
```

Sets or gets the text inside an element (without HTML tags).

### `innerHTML`

```js
document.getElementById("box").innerHTML = "<strong>Bold</strong>";
```

Sets or gets the HTML content of an element.

### `innerText`

```js
document.getElementById("note").innerText = "This is a note";
```

Similar to `textContent`, but more aware of styling and layout.

---

## CSS Manipulation

### Inline Style

```js
document.getElementById("box").style.backgroundColor = "blue";
```

Changes the style directly.

### Class Manipulation

```js
document.getElementById("box").classList.add("active");
document.getElementById("box").classList.remove("hidden");
document.getElementById("box").classList.toggle("dark");
```

Adds, removes, or toggles a CSS class.

---

## Creating and Inserting Elements

### `createElement()` and `append()`

```js
const newEl = document.createElement("p");
newEl.textContent = "Hello";
document.body.append(newEl);
```

### `appendChild()`

```js
parent.appendChild(newEl);
```

Adds a child element to the parent node.

---

## Removing Elements

```js
const el = document.getElementById("toRemove");
el.remove();
```

Removes an element from the DOM.

---

## Event Listeners (JavaScript)

### `addEventListener()`

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});
```

Attaches an event listener to an element.

---

## Event Listeners (Inline in HTML)

You can attach event listeners directly in your HTML using attributes like `onclick`, `onchange`, etc.

### Example: Button Click

```html
<button onclick="greet()">Click Me</button>

<script>
  function greet() {
    alert("Hello from inline event!");
  }
</script>
```

### Common Inline Events:

| HTML Attribute | Triggered When...         |
| -------------- | ------------------------- |
| `onclick`      | The element is clicked    |
| `onchange`     | Value of input changes    |
| `onmouseover`  | Mouse hovers over element |
| `onmouseout`   | Mouse leaves the element  |
| `onkeydown`    | A key is pressed down     |
| `onkeyup`      | A key is released         |

### When to Use:

- Good for small, quick scripts
- Not recommended for large-scale apps (inline logic is harder to maintain)

---

## Summary

JavaScript DOM methods allow you to dynamically update and manipulate content, structure, and styles on a web page. Mastering these techniques is key to creating interactive web apps.
