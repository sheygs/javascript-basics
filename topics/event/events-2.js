/* eslint-disable */

function handleClick(e){
  e.stopPropagation();
  console.log(e.currentTarget,'Clicked!');
}

function handleClickMe(e) {
  e.stopPropagation();
  console.log(this,'Clicked Me!');
}

const button = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

button.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClickMe);

// button.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(e){
  console.log('You clicked a button!');
  //console.log(parseFloat(e.target.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);

   //stop this event from bubbling up
  //e.stopPropagation();
}

buyButtons.forEach(function(button){
  button.addEventListener('click', handleBuyButtonClick);
})

window.addEventListener( 
  'click', 
  function(e){
  console.log('YOU CLICKED WINDOW');
  console.log(e.target);
  console.log(e.type);
  console.log(e.bubbles);

  // prevent all other lower ancestors from the HTML element  
  // down to the target element from kicking
   event.stopPropagation();
},{ capture: true })


// const photoEl = document.querySelector('.photo');
// photoEl.addEventListener('mouseenter', function(e){
//   console.count(e.currentTarget);
//   console.log(this);
//   console.log(e.currentTarget);
//   console.log(e.currentTarget === this);
// })