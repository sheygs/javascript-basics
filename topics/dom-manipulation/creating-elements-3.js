/* eslint-disable */
// Creating elements

// create p element
// add textContent
// create class
const p = document.createElement('p');
p.textContent = 'Created Paragraph tag';
p.classList.add('secondary-paragraph');
console.log(p);

// create img element
// add src & alt attributes
const img = document.createElement('img');
img.setAttribute('alt', 'photo-01');
img.src = 'https://picsum.photos/200';
console.log(img);

//create div
//create textNode/element
// append textNode/element to div
//set class
const div = document.createElement('div');
div.classList.add('wrapper');
div.appendChild(p);
div.appendChild(img);
console.log(div);

//append div to body
document.body.appendChild(div);

//Adding something to the top of the page like a heading
const h1 = document.createElement('h1');
h1.textContent = 'DOM - Creating Elements';
div.insertAdjacentElement('afterbegin', h1);

//lists & list items
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
ul.appendChild(li);
div.insertAdjacentElement('beforeend', ul);
const li5 = document.createElement('li');
li5.textContent = 'Five';
ul.appendChild(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
ul.insertAdjacentElement('afterbegin', li1);

const li2 = li1.cloneNode(true);
li2.textContent = 'Two';
li1.insertAdjacentElement('beforeend', li2);

const li4 = li2.cloneNode(true);
li4.textContent = 'Four';
ul.insertAdjacentElement('beforeend', li4);
