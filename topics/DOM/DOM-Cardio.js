// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

/* eslint-disable */
// Solution

const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `
  <ul>
     <li>One</li>
     <li>Two</li>
     <li>Three</li>
  </ul>
`;
div.innerHTML = ul;

const img = document.createElement('img');
img.setAttribute('src','https://picsum.photos/250');
img.classList.add('cute');
img.alt = 'Cute Puppy';
div.appendChild(img);
console.log(img);


const htmlDiv = `
      <div>
         <p>I am paragraph One</p>
         <p>I am paragraph Two</p>
     </div>
    `;

const htmlDivFragment = document.createRange().createContextualFragment(htmlDiv);
const domDiv = htmlDivFragment.querySelector('div');   
div.insertAdjacentElement('afterbegin', domDiv);

const addClassToSecondParagraph = domDiv.children[1].classList.add('warning');
domDiv.firstElementChild.remove();


function generatePlayerCard(name, age, height){
  const html = `
     <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
    </div>
  `;
  return html;
}

const newDiv = document.createElement('div');
newDiv.classList.add('cards');
const firstCard = generatePlayerCard('Kola',29, 179);
const secondCard = generatePlayerCard('Sheygs',25, 176);
const thirdCard = generatePlayerCard('Seun',26, 175);
const fourthCard = generatePlayerCard('Mayowa',21, 175);

const arr = [firstCard, secondCard, thirdCard, fourthCard];
arr.map(el => {
  const fragment = document.createRange().createContextualFragment(el);
  const domDiv = fragment.querySelector('.playerCard');
  domDiv.style.margin = '20px';
  const button = document.createElement('button');
  button.innerHTML = `X`;
  domDiv.appendChild(button);
  document.body.insertAdjacentElement('afterbegin', domDiv);
  [...document.querySelectorAll('button')].forEach(el => el.addEventListener('click', function(){
    el.parentElement.remove();
  }));
})
