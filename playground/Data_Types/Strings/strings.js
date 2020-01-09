/* -----------------------------STRINGS-----------------------------------------
   - Strings are used to hold texts
   - There are 3 ways to create a String:
   -> Using single quotes ' '
   -> Using double quotes " "
   -> Using backticks ` `
*/

/* eslint-disable */
const first = "Olusegun";  // double quotes
const last = 'Ekoh';      // single quotes
const middle = `Olaoluwa`;// backticks
// using escape literal
const sentence = 'She\'s in love with JavaScript';
//Or 
const sentence2 = "JavaScript is so \"tricky\"";

//backticks more suited for multi-line
const song = `
               <div>
                  <h2>Stand Up</h2>
               </div>
             `;

//Backticks used for string interpolation & concatenation
//Concatenation - combining two or more strings into one (ES5 way)
const greetings = "Hello I am " + first + ". Nice to meet you";

//String interpolation - inserting a variable inside a string (ES6) 
const greetings1 = `Hello I am ${last}. Nice to meet you`;  
const html = `
              <div>${first}</div>
              <p>${greetings}</p>
             `;
document.body.innerHTML = html;
/* eslint-enable */

/* ---------------STRING PROPERTIES & INDEXES -------------------------------------
- property: length
- zero-based indexing
- To get the index of a character from a string, use the:
   -> s.charAt() or 
   -> s[i] where i is the index number
*/
const pizza = 'pepperoni';

// To get the length of the string
// eslint-disable-next-line prefer-destructuring
const length = pizza.length;
console.log(length);

// To get the first letter
const firstChar = pizza.charAt(0);
const firstLetter = pizza[0];
console.log(firstChar, firstLetter); // 9, p, p

// To get the last letter
const lastChar = pizza.charAt(length - 1);
const lastLetter = pizza[length - 1];
console.log(lastChar, lastLetter);

/* -----------------------STRINGS & IMMUTABILITY-----------------------------------------
- Strings are immutable i.e. cannot be modified after it is created
N/B: Everything is an Object in JavaScript
*/

// Makes a copy of the value & converts to uppercase without altering the original string
const immutableString = 'I shall not change!';
console.log(immutableString.toUpperCase());

// --------------------CORRECTLY TYPE-CHECKING STRINGS ----------------------------------

console.log(typeof 'Pepperoni');
console.log('Pepperoni' instanceof String);
/* eslint-disable no-new-wrappers */
console.log(new String('Pepperoni') instanceof String);
console.log(String('Pepperoni') instanceof String);
console.log(toString('Pepperoni') instanceof String);
