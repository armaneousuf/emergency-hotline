### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

> The main difference is between the four is how they return the value or element.

- In `getElementById` it returns only the specific `id` while `getElementsByClass` returns all the selected `classes`. 
- On the otherhand `querySelector` returns the first `element` while `querySelectorAll` returns the all elements that matches a specific CSS `selector`

### 2. How do you create and insert a new element into the DOM?

> To create and insert a new element into DOM we have to follow three steps

1. Create the element using `document.createElement()`. It will create an empty node element.
2. Then modify the element using styles.
3. And lastly, insert the element using `appendClild()` or `insertBefore()` method to place the element to the DOM.

### 3. What is Event Bubbling and how does it work?

> Event bubbling is a process in the DOM where an event travels up to its parent, grandparent and more on till it reaches to the root of the document.

When an event, such as a click occurs on an element, the browser handles it in 
- Capturing phase
- Target phase & 
- Bubbling pahse. 

And through these three steps it works. 


### 4. What is Event Delegation in JavaScript? Why is it useful?

> Event delegation is a design pattern in JavaScript for handling events on multiple elements that are structurally similar. 
Event delegation used to simplified code like instead of adding `eventListener` on every piece of items we can add a single `eventListener` to a common parent element. haha `>3`

### 5. What is the difference between preventDefault() and stopPropagation() methods?

> `preventDefault()` and `stopPropagation()` are both methods fo the `Event` ofbject but, they both serve different purposes.

`preventDefault()` stops the default action that the browser would normally perform in response to an event like `forms, links and context menus`.

`stopPropagation()` stops the event from continuing the bubbling up to parent elements.