/* eslint-disable */

function handleClick(){
  console.log('Clicked!');
}

const arrowFunc = () => console.log('Using an arrow function');

const button = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
button.addEventListener('click', handleClick);
coolButton.addEventListener('click', arrowFunc);

// button.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('.buy');

function buyItem(){
  console.log('Item Bought!');
}
function handleBuyButtonClick(button){
  button.addEventListener('click', buyItem)
}

buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('Bought Already')
//   })
// })