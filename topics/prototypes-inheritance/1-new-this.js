// The 'new' keyword is used to create an instanceof an object

// dates don't  have literal syntax
const date = new Date();

//console.log(date.getFullYear());

const names = new Array('Olusegun', 'Ekoh');
const sheygs = new Object({ first: 'Olusegun', last:'Ekoh' });
const span = document.createElement('span');

// console.dir(names, sheygs, span);



function Pizza(toppings = [], customer){
 console.log('Make a pizza');
 this.toppings = toppings;
 this.customer = customer;
 this.id = Math.floor(Math.random()*16777215).toString(16);
 this.slice = 10;
//  this.eat = function(){
//     if (this.slice > 0){ 
//       return this.slice--;
//     }
//     else {
//       console.info('No slices left!');
//     }
//     console.log(`Eaten ${this.slice} slice`);
//  }
}

Pizza.prototype.eat = function(){
    if (this.slice > 0){ 
      return this.slice--;
    }
    else {
      console.info('No slices left!');
    }
    console.log(`Eaten ${this.slice} slice`);
}

Pizza.prototype.describe = function(){
  return `This pizza is for ${this.customer} with toppings ${this.toppings.join(',')} and there are ${this.slice} slices left`;
}

const pepperoniPizza = new Pizza(['hamburger', 'pepperoni'], 'Olusegun');
const anotherPizza = new Pizza(['mushrooms'], 'Ewa');

console.log(pepperoniPizza);
console.log(anotherPizza);
// console.log(pepperoni.constructor);
// console.log(pepperoni instanceof Pizza);


// 'this' keyword refers to the instanceof an object that a function is bound
// The 'this' keyword in an arrow function is equal to whatever the 'this' 
// keyword at a higher level function, else the 'this' keyword is equal to
// the 'window' object.

const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');


/* using the old way */

// function handleClick (){
//  // 'this' refers to the buttons
//  console.log('Outside:',this);

//  let that = this;
 
//  setTimeout(function(){

//   // 'this' refers to the window object
//   console.log('Inside:',this);

//   // to make 'this' refer to the button in this scope, 
//   // set 'that' to equal to the upper-scoped 'this' 
//   // which refers to the actual buttons
//    that.textContent = 'Content Changed';

//  }, 2000);
// }

/* the new approach using arrow-function */

function handleClick(){

  // this refers to the buttons
  console.log('Outside:',this);

  setTimeout(() => {

    // 'this' refers to the buttons too!
    // This is because the 'this' keyword in 
    // an arrow function is equal to whatever the 'this' 
    // keyword at a higher level function
    console.log('Inside:',this);
    this.textContent = 'Button Clicked';
  }, 2000);
}

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
