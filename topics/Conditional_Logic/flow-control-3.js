/*
 - FLOW CONTROL
   if, else if, & else statements
  - Relational (Comparison) Operators : >= , <= , > , <, ==, ===, !=, !==
  - Logical Operators: && , ||, !
*/

// if-else (two-condition statement)
const condition = true;
if (condition) {
  console.log('Yes');
} else {
  console.log('No');
}

// if-else if (> two-condition statement)
(function ifElseIf() {
  const number = 99;
  let result; // undefined
  if (number === 1) {
    result = 'One';
  } else if (number === 99) {
    result = 'Ninety Nine';
  } else if (number === 999) {
    result = 'Nine Hundred and Ninety Nine';
  } else {
    result = 'No Match';
  }
  console.log(result);
})();

// Selects the first statement if all statements are true
(() => {
  /* eslint-disable no-constant-condition */
  if (10 > 2) {
    console.log('Ten is greater than Two');
  }
  if (15 > 12) {
    console.log('Fifteen is greater than Twelve');
  }
  if (9 > 7) {
    console.log('Nine is greater than Seven');
  }
})();

(() => {
  /* eslint-disable no-constant-condition */
  // N/B: Beware of the order of your if-else statements
  const age = 55;
  if (age > 50) {
    console.log('In your fifties');
  } else if (age > 60) {
    console.log('In your sixties');
  } else if (age > 70) {
    console.log('In your seventies');
  } else if (age > 80) {
    console.log('In your eighties');
  } else {
    console.log('Below Range');
  }
})();

(function slugify(sentence, lowercase) {
  /* eslint-disable */
  let slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.toLowerCase();
  }
  return slug;
})('I LOVE YOU', false);


(() => { 
const name = 'seg', last = 'Ekoh';
if (name === 'Mike' || (name === 'seg' && last == 'Ekoh')){
  console.log('Cool Name');
}

const includesSeg = 'Olusegun'.includes(name) 
if (includesSeg){
  console.log('Super Cool Name');
}
 // function returns
function itIncludesSeg(name){
  return 'Olusegun'.includes(name);
}
if (itIncludesSeg){
  console.log('It Includes Seg!');
}
})();

// truthy/falsy values
(() => { 
const values = [[], {}, -10, 1, 0, '', 'full string', ' ', undefined, NaN, null];
    console.group('truthy or falsy values');
    values.forEach(value => {
    if (value){
       console.log(value,'is truthy');
    }
    else {
       console.log(value, 'is falsy');
    }
    });
    console.groupEnd();
})()