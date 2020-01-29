/* eslint-disable */

// Traversing

const me = document.querySelector('.sheygs');
// for element nodes
console.log(me.children);
console.log(me.firstElementChild);
console.log(me.lastElementChild);
console.log(me.previousElementSibling);
console.log(me.nextElementSibling);
console.log(me.parentElement);

// for text nodes
console.log(me.childNodes);
console.log(me.firstChild);
console.log(me.lastChild);
console.log(me.previousSibling);
console.log(me.nextSibling);
console.log(me.parentNode);

//Removing
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p); //  still displays p element behind the scenes; not removed from the dom even after explicitly removing it


document.body.appendChild(p);


