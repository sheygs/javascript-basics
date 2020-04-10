// The 'new' keyword is used to create an instanceof an object
const date = new Date();
console.log(date.getFullYear());

const names = new Array('Olusegun', 'Ekoh');
const sheygs = new Object({ first: 'Olusegun', last:'Ekoh' });
const span = document.createElement('span');
console.dir(names);
console.dir(sheygs);
console.dir(span);

function Pizza(){
 console.log('Pizza');
}

const pepperoni = new Pizza();
console.log(pepperoni);
console.log(pepperoni.constructor);
console.log(pepperoni instanceof Pizza);
