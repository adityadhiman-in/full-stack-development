# JavaScript for Web Development

## 1. How to Link JavaScript to Your HTML

JavaScript can be linked to your HTML document in three main ways:

### **a. Inline JavaScript**

- JavaScript code is written directly inside an HTML element using the `onclick` or `onload` attribute.

```html
<button onclick="alert('Hello!')">Click Me</button>
```

### **b. Internal JavaScript**

- JavaScript code is written inside a `<script>` tag within the HTML file.

```html
<script>
  console.log("This is internal JavaScript");
</script>
```

### **c. External JavaScript**

- JavaScript code is stored in a separate `.js` file and linked to the HTML using the `<script>` tag.

```html
<script src="script.js"></script>
```

- Benefits:
  - Improves code organization and reusability.
  - Easier to debug and maintain.

---

## 2. DOM Model

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the document as a hierarchical tree structure of objects.

### **Key Features:**

- **Objects:** Represent elements like `<div>`, `<p>`, `<body>`.
- **Properties:** Attributes like `innerHTML`, `style`, `className`.
- **Methods:** Actions like `getElementById()`, `appendChild()`.

### **Example:**

```html
<div id="example">Hello, World!</div>
<script>
  const element = document.getElementById("example");
  console.log(element.innerHTML);
</script>
```

### **Difference Between Properties and Methods:**

- **Properties:** Describe attributes (e.g., `innerHTML`, `style`).
- **Methods:** Perform actions (e.g., `appendChild()`, `remove()`).

---

## 3. DOM Manipulation - Selectors of All Types

### **Selectors to Access Elements:**

- `getElementByTagName`: Selects an element by its ID.
- `getElementByClassName`: Selects an element by its ID.
- `getElementById`: Selects an element by its ID.
- `querySelector`: Selects the first element matching a CSS selector.
- `querySelectorAll`: Selects all elements matching a CSS selector and returns a NodeList.

```javascript
const element = document.querySelector(".my-class");
const allElements = document.querySelectorAll("p");
```

### **Modifying Elements & Changing Styles:**

- Change text, attributes, or styles dynamically.

```javascript
document.getElementById("example").innerHTML = "Updated Text";
```

---

## 4. Event Handling - Event Listeners

Events allow JavaScript to respond to user interactions like clicks, keypresses, or mouse movements.

### **Using Event Listeners:**

- Attach events using `addEventListener`.

```javascript
e.addEventListener("click", () => {
  alert("Element clicked!");
});
```

### **Anonymous Functions:**

- Use anonymous functions directly within an event listener for quick functionality.

---

## 5. Debugging Through Console

Debugging helps identify and fix errors in JavaScript code.

### **Using Browser Developer Tools:**

1. Open the browser’s DevTools (usually `F12` or right-click > Inspect).
2. Use the "Console" tab for error messages and testing snippets.
3. Use the "Sources" tab to set breakpoints and inspect values during execution.

### **Example:**

```javascript
console.log("Debugging example");
```

---

## 6. Animations with JavaScript

JavaScript allows creating animations by dynamically modifying element properties.

```javascript
let pos = 0;
const box = document.getElementById("box");
setInterval(() => {
  pos++;
  box.style.left = pos + "px";
}, 10);
```

---

## 7. A Basic Project with JavaScript

Build a small project to apply your knowledge.

---

## 8. Conclusion

In conclusion, JavaScript is a versatile and powerful language that can be used for both front-end and back

This foundation prepares you for advanced topics as we move toward backend development and complete full-stack solutions.

- Debugging techniques.
- Form validations.
- Asynchronous JavaScript (AJAX, Promises).
- Import/Export in JavaScript.
- Working with APIs.
