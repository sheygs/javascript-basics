/* eslint-disable */
// Creating elements with Strings 
// Read on XSS (Cross-Site Scripting)
const item = document.querySelector('.sub-items');
// console.log(item);

const width = 400;
const src = `https://picsum.photos/${width}`;
const description = 'Cute pup';
const html = `
  <div class="wrapper">
  <h2>${description}</h2>
  <img src="${src}" alt="${description}">
  </div>
`;

// Turn String to DOM element
const fragment = document.createRange().createContextualFragment(html);
console.log(fragment.querySelector('img'));

document.body.appendChild(fragment);