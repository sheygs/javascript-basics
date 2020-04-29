const person = {
   first: 'Olusegun',
   sayHi: function(){
    console.log(this);
     return `Hi ${this.first}`;
   }
};

const mark = { first: 'Mark' };

const greet = person.sayHi.bind(mark);
greet();
const greet1 = person.sayHi.bind({ name: 'Kola' });
greet1();




// Ex. 2

const button = document.createElement('button');
button.textContent = 'Click Me!';
document.body.appendChild(button);


// By calling `bind` against querySelector,
// we say that when the $ function is run,
// use 'document' as the `this` value
const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);

const wrapper = document.querySelector('.wrapper');
const p = wrapper.querySelector('p');
console.log($('p'));
console.log(lookFor('p'));

