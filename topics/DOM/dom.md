## Document Object Model (DOM)
### Selectors
Most commonly used element selectors are:
`element.querySelector(selector)` which returns reference to the first match of selector
`element.querySelectorAll(selector)`which returns a "nodelist" containing references to all of the matches of the selectors.

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

### Element properties & methods
```js
// sample code
targetElement.insertAdjacentElement(position,element);
element.insertAdjacentHTML(position, text);
element.insertAdjacentText(position, element);


```

### Working with classes
```js
// sample code
   const elementClasses = elementNodeReference.classList;
   elementClasses.add(className);
   elementClasses.remove(className);
   elementClasses.toggle(className);
   elementClasses.contains(className);

```

N/B:- Read on XSS (Cross-Site Scripting)

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
