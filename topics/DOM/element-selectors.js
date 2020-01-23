/* eslint-disable */

/*
  - Most commonly used element selectors are:
  i) element.querySelector(selector): returns reference to the first match of selector
  ii) element.querySelectorAll(selector): returns a "nodelist" containing references to all of the matches of the selectors
*/

/* QuerySelector */
//console.log(document.querySelector('.items'));

// get things from the element
console.log(document.querySelector('.items').id);
console.log(document.querySelector('.items').className);

// change styles
const items = document.querySelector('.items');
items.style.background = 'coral';
items.style.width = '500px';
items.style.margin = '0 auto';
items.style.color = 'yellow';
items.style.padding = '10px 0 10px 30px';
// document.querySelector('.items').style.display = 'none';
document.querySelector('.items > p:last-child').style.color = 'green';
document.querySelector('p:nth-child(odd)').style.fontSize = '25px';

// change content
document.querySelector('.items > p').textContent = 'First paragraph changed';
document.querySelector('.items p:nth-child(2)').innerText = 'Second paragraph changed';
document.querySelector('.sub-items').innerHTML =  `<a href="https://sheygs.github.io" target="_blank">My website</a>`;


/* QuerySelectorAll */
const mainDiv = document.querySelector('#main-div');
const paragraphs = mainDiv.querySelectorAll('p'); // nodeList
// convert to array
let paragraphsArray = Array.from(paragraphs);
paragraphsArray.forEach((el, index) => {
  el.innerText = `Paragraph ${index} has been changed!`;
})
paragraphsArray.reverse();


// use the below for script placed in the head tag
// function init(){
//   const p = document.querySelector('p');
//   console.log(p);
// }

// DOMContentLoaded will load all the initial HTML document 
// document.addEventListener('DOMContentLoaded', init);

