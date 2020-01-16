// debugger;
/*
   Debugging 
   - Console.log methods
     - .info(), 
     - .error() - for outputing an error message; used for testing purpose, 
     - .warn(),
     - .table() - displays a table data as table; takes an [] or {} as argument,
     - .count() - Logs the number of times that this particular call to count() has been called,
                - count based on the argument passed to count(),
     - .group()/groupEnd(),

   - Callstack/Stack Trace
     - A call stack is a mechanism for an interpreter to keep track of its 
     place in a script that calls multiple functions — what function is 
     currently being run and what functions are called from within 
     that function, etc

   - Grabbing Elements 
     - Select the element in the elements tab;
     - from console, type $0 (elt that was last selected); $1 (elt before)
     - $p: select one p elts tag, $$p: select all the p elements tag

   - Debugger/Breakpoints
   - Network Requests
   - Break On Attribute 
*/

const people = [
  {
    name: 'Olusegun',
    cool: true,
    country: 'Nigeria',
  },

  {
    name: 'Toto',
    cool: true,
    country: 'United Kingdom',
  },

  {
    name: 'Tomiwa',
    cool: false,
    country: 'United Kingdom',
  },
];

/* eslint-disable no-unused-vars */
people.forEach((person, index) => {
  // debugger;
  console.log(`${person.name}`);
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.cool);
  // console.log(person.country);
  // console.groupEnd(`${person.name}`);
});

console.table(people);

// Some Setup Code

// function group() {
//   console.group('Starting group');
//   console.log(1);
//   console.log(2);
//   console.groupEnd('Starting group');
// }

function doctorize(name) {
  // console.count(`Running Doctorize`);
  return `Dr. ${name}`;
}

function greet(name) {
  // doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootStrap() {
  console.log('Starting App!');
  go();
}

// bootStrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
