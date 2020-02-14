/* eslint-disable */

const age = 24;

const segun = {
  first: 'Olusegun',
  last: 'Ekoh',
  age: age,
  'cool-dude': true,
  'likes guitar': true,
  provisions: {
    biscuits: 10,
    sweets: 15,
    snickers: 32,
    'five alive': 3
  },
  // Method 1
  sayHello: function(greeting = 'Hello'){
     return `${greeting} ${this.first}`;
  },
  // Method 2
  bio(title = 'Mr.'){
    return `I am ${title} ${this.last}`;
  }, 
};
  // add a new property
  segun.job = 'Developer';

  //modify an existing property
  segun.age = 40;

  // delete a property from an object
  // true or false
  console.log(delete segun.job) 

  segun['cool-dude']; 
  segun['likes guitar'];
  
   // Methods 
   segun.sayHello(); 
   segun.bio('Engr.'); 

   //const input = document.querySelector('[name="first"]');
   //console.log(input ? input.value : null);

