const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const names = ['olusegun', 'olaoluwa', 'femi'];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley'
    }
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep'
    }
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer'
    }
  }
];

function addHands(face){
  return `🖐${face} 🖐`;
};

const toys = faces.map(addHands);


function ekosify(name){
  return `${name} Ekoh`;
}

function uppercase(name){
  return `${name[0].toUpperCase()}${name.slice(1)}`
}

const fullNames = names.map(uppercase).map(ekosify);

// multiply each total to tax of 13%
// set to 2.d.p ( returns string floating point number)
// convert to a numeric floating point number
const taxes = orderTotals.map(total => parseFloat((total * 1.13).toFixed(2)));



function attachBody(face, body){
  return `
       ${face}
     ${body.repeat(3)}
    ${Array(3).fill(body).join(' ')}
 👇   ${body.repeat(2)}   👇
     ${Array(2).fill(body).join('  ')}
     ${Array(2).fill(body).join('  ')}
     👢   👢 
  `;
}

faces.map(face => attachBody(face, '🥞')).forEach(body => console.log(body));


 // get their birthday
 // figure out how old they are
 // return their fullname and birthday(in yrs.) in an object

 const sanitizePeople = people.map(person => {
  //console.log(person);
  const { birthday, names } = person;
  const { first, last } = names;
  const age = calculateAge(birthday);
  return {
    name: `${first} ${last}`,
    age
  };
});

console.table(sanitizePeople);


function calculateAge(birthday) { 
 const MILLISECONDS_PER_YEAR = 31536000000;
 const date = new Date(birthday);
 const differenceInMilliseconds = Date.now() - date.getTime();
 const age =  Math.floor(differenceInMilliseconds/MILLISECONDS_PER_YEAR);
 return age;
}