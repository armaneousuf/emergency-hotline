### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

> The main difference between the four is how they return the value or element.

- In `getElementById` it returns only the specific `id` while `getElementsByClassName` returns all the selected `classes`. 
- On the other hand, `querySelector` returns the first `element` while `querySelectorAll` returns all elements that match a specific CSS `selector`.

### 2. How do you create and insert a new element into the DOM?

> To create and insert a new element into DOM we have to follow three steps

1. Create the element using `document.createElement()`. It will create an empty node element.
2. Then modify the element using styles.
3. And lastly, insert the element using `appendChild()` or `insertBefore()` method to place the element in the DOM.

### 3. What is Event Bubbling and how does it work?

> Event bubbling is a process in the DOM where an event travels up to its parent, grandparent, and more until it reaches the root of the document.

When an event, such as a click, occurs on an element, the browser handles it in:  
- Capturing phase  
- Target phase  
- Bubbling phase  

And through these three steps it works.  

### 4. What is Event Delegation in JavaScript? Why is it useful?

> Event delegation is a design pattern in JavaScript for handling events on multiple elements that are structurally similar.  
Event delegation simplifies code; instead of adding an `eventListener` on every item, we can add a single `eventListener` to a common parent element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

> `preventDefault()` and `stopPropagation()` are both methods of the `Event` object, but they serve different purposes.

- `preventDefault()` stops the default action that the browser would normally perform in response to an event, like forms, links, and context menus.  
- `stopPropagation()` stops the event from continuing to bubble up to parent elements.
