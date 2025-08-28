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

#### How it works? why don't you just google it?