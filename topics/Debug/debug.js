/*
   Debugging 
   - Console.log methods
   - Callstack
   - Grabbing Elements
   - Breakpoints
   - Scope
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
people.forEach((person, index) => console.log(`${index}: ${person.name}`));

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

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
