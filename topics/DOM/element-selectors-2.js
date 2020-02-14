/* eslint-disable */

const heading = document.querySelector('h2');

/* QuerySelector */
//console.log(document.querySelector('.items'));

// get things from the element
// console.log(document.querySelector('.items').id);
// console.log(document.querySelector('.items').className);

// change styles
const items = document.querySelector('.items');
items.style.background = 'coral';
items.style.margin = '0 auto';
items.style.color = 'yellow';
items.style.padding = '10px 0 10px 30px';
// document.querySelector('.items').style.display = 'none';
document.querySelector('.items > p:last-child').style.color = 'green';
document.querySelector('p:nth-child(odd)').style.fontSize = '25px';

// change content
document.querySelector('.items > p').textContent = 'First paragraph changed';
document.querySelector('.items p:nth-child(4)').innerText = 'Third paragraph changed';
document.querySelector('.sub-items').innerHTML =  `<a href="https://sheygs.github.io" target="_blank">My website</a>`;


/* QuerySelectorAll */
const mainDiv = document.querySelector('#main-div');
const paragraphs = mainDiv.querySelectorAll('p'); // nodeList

// convert to array
const paragraphsArray = Array.from(paragraphs);
paragraphsArray.forEach((el, index) => {
  el.innerText = `Paragraph ${index} has been changed!`;
})

/* Element Properties & Methods */
// console.dir(heading); 
mainDiv.insertAdjacentText('beforeend','The end');


/* Working with classes */

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.contains('cool'); 
console.log(pic.classList);

function toggle(){
  console.log(this,pic.classList.toggle('round')); // adds 'round' if not there, otherwise, removes
}

pic.addEventListener('click', toggle);


/* Built-in & Custom Data Attributes */

pic.alt = 'a random pic'; // setter
console.log(pic.alt); // getter

/* 
returns 0 because we have to wait for the picture to be 
downloaded to know the size
solution:- add 'load' event listener to the pic or the 
window to load all resources before the naturalWidth calculation
*/

console.log(pic.naturalWidth); 

pic.addEventListener('load', function (){ console.log(pic.naturalWidth) });

pic.setAttribute('alt', 'some random pic'); 
console.log(pic.getAttribute('alt')); 
console.log(pic.hasAttribute('alt')); 

/* Custom Data Attributes */

const custom = document.querySelector('.custom');

/* returns an object containing all the data */
console.log(custom.dataset); 

custom.addEventListener('click', function(){
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
})