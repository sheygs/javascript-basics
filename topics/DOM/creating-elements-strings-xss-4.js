/* eslint-disable */

const item = document.querySelector('.sub-items');
// console.log(item);

const width = 400;
const src = `https://picsum.photos/${width}`;
const description = 'Cute pup';

/* Creating elements with Strings */
const html = `
  <div class="wrapper">
  <h2>${description}</h2>
  <img src="${src}" alt="${description}">
  </div>
`;

/* Converting DOM String to DOM element */
const fragment = document.createRange().createContextualFragment(html);
console.log(fragment.querySelector('img'));

document.body.appendChild(fragment);