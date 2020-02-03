/* eslint-disable */
/*
 -TARGETS
 - BUBBLING
 - PROPAGATION
 -CAPTURE
*/

/*
  BUBBLING
  When an event happens on an element, it first runs the handlers on it, 
  then on its parent, then all the way up on other ancestors.
*/


/*
 PROPAGATION
 - used to stop bubbling event from the target element straight up
*/

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

//Named function handler benefits
// Adheres to the DRY principle: prevents multiple updates of  anonymous functions 
// if you need to remove eventListeners, use a named function

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
 //  e.stopPropagation();
}

// event.target - the deepest element that originated the event
// event.currentTarget (= this) - the current element that handles the event (the one that has the handler on it)
// event.eventPhase - the current phase (capturing = 1, target = 2, bubbling = 3)

// this - always refers to the Parent Element
// `event.target` could equal `this`. This happens when the click is made directly on the parent element 

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
  // this will prevent all other lower ancestorsm from the HTML element  
  // down to the target element from kicking
   event.stopPropagation();
},{ capture: true })

/*
 -mousemove
 -mouseenter
 -mouseleave
 -click
*/

// const photoEl = document.querySelector('.photo');
// photoEl.addEventListener('mouseenter', function(e){
//   console.count(e.currentTarget);
//   console.log(this);
//   console.log(e.currentTarget);
//   console.log(e.currentTarget === this);
// })