## Document Object Model (DOM)
### Selectors

Most commonly used element selectors are:

- `document.querySelector()` returns the first element in the DOM that matches the given selector(s).

```js
   document.querySelector('p')  — returns the first  `<p>`  element

   document.querySelector('.text-white')  — returns the first element with class  text-white

   document.querySelector('#art-001')  — returns the element with  id  attribute  art-001

   document.queryselector('p.text-white')  — returns the first  `<p>`  element with class  text-white  
```

- `document.querySelectorAll()`which returns a `Nodelist` containing references to all of the matches of the selectors.


There are DOM methods and properties which allow us to use these family relationships to navigate and select elements.  Here are a few:

- `element.children`  — an  `HTMLCollection`  containing all child elements of element

- `element.parentElement`  — element's parent element (any given element can only have up to one parent)

- `element.nextElementSibling`  +  `element.previousElementSibling`  — these allow us to iterate through a given level (between list items, for example)


Use the below if the script is placed in the head tag

```js
  // sample code
  function init(){
   const p = document.querySelector('p');
   console.log(p);
  }

   // DOMContentLoaded will load all the initial HTML document 
   document.addEventListener('DOMContentLoaded', init);
```


### Modifying Content

Having access to DOM elements allows us to modify their content. For most cases, two properties suffice: `innerHTML` and `textContent`


### Working with classes

We can add and remove CSS classes using the `classList` property

```js
// sample code
   const elementClasses = elementNodeReference.classList;
   elementClasses.add(className);
   elementClasses.remove(className);
   elementClasses.toggle(className);
   elementClasses.contains(className);

```

### Summary

- modifying an element's contents with  `innerHTML`  and  `textContent`

- adding and removing CSS classes with  `classList`

- modifying styles directly with the  `style`  property

- setting attributes with  `setAttribute()`

- creating new elements with  `createElement()`  and adding them to the DOM with  `appendChild()`

- DOM elements have replacements and/or removal methods: `replaceChild()` and `removeChild()`. Both methods call on the __parent__ of the element you wish to remove. For instance:

```js
  myElement.parentElement.removeChild(myElement)
```

### Element properties & methods


```js
// sample code
targetElement.insertAdjacentElement(position,element);
element.insertAdjacentHTML(position, text);
element.insertAdjacentText(position, element);

```

To convert a DOM string to DOM element

```js

   // sample code
   const html = `
  <div class="wrapper">
  <h2>${description}</h2>
  <img src="${src}" alt="${description}">
  </div>
   `;
   const fragment = document.createRange().createContextualFragment(html);  

```

 Ways of inserting DOM strings

- Converting using `fragment` then inserting using `insertAdjacentElement`
- Inserting using `insertAdjacentHTML`;


### Useful Input Events

- `input`  — similar to the  `change`  event, the  input  event is emitted every time the user changes the input in a text field, and the  `$event.target.value`  property contains the current content of the text field

- `focus`  /  `blur`  — when a user clicks or tabs to a form control and it becomes the active control, its  `focus`  event is emitted; when a user clicks or tabs away from a form control and it is no longer the active control, its  `blur`  event is emitted

- handling text input with the  `value`  property

- controlling what happens when a form is submitted with  `preventDefault()`

- capturing input from multiple choice inputs with the  `change`  event
