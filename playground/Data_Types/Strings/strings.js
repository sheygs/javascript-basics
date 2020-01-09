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
let sentence = 'She\'s in love with JavaScript';
//Or 
sentence = "JavaScript is so \"tricky\"";

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
const greetings1 = `Welcome to the JavaScript basics`;  
const html = `
              <div>${greetings}</div>
              <p>${greetings1}</p>
             `;
document.body.innerHTML = html;

//Appending is another way to add two or more strings
let definition = 'Science';
    definition+= ' is the study of ';
    definition+= 'living & non-living things.';
console.log(definition);

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
let length = pizza.length;
console.log(length);

// To get the first character
const firstChar = pizza.charAt(0);
const firstLetter = pizza[0]; // preferred
console.log(firstChar, firstLetter); // 9, p, p

// To get the last character
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
// typeof - returns the datatype of the variable you pass into it
console.log(typeof 'Pepperoni'); // string
console.log('Pepperoni' instanceof String); // false
/* eslint-disable no-new-wrappers */
console.log(new String('Pepperoni') instanceof String); // true
console.log(String('Pepperoni') instanceof String); // false
console.log(toString('Pepperoni') instanceof String); // false

/* ---------------------------STRING METHODS-----------------------------------------------
   -charAt()
   -charCodeAt()
   -fromCharCode()
   -toLowerCase()/toUpperCase()
   -concat()
   -startsWith()/endsWith()
   -includes()
   -indexOf()/lastIndexOf()
   -match()/matchAll()
   -repeat()
   -replace()
   -padStart()/padEnd()
   -slice()/substring()
   -split()
  
   -trim()/trimEnd()/trimStart()
   -toString()
 */

sentence = 'freeCodeCamp is the best.';
/* eslint-disable-next-line prefer-destructuring */
length = sentence.length;

// returns an integer btw 0 & 65535 representing UTF-16 code at the given index
const num1 = sentence.charCodeAt(0);
const num2 = sentence.charCodeAt(length - 1);
console.log(num1, num2); // 102, 46

// returns a string created from the UTF-16 code units
const string = String.fromCharCode(num1, num2); // f.
console.log(string);

// converts a string value to an uppercase/lowercase
const upperCase = sentence.toUpperCase();
const lowerCase = sentence.toLowerCase();
console.log(upperCase, lowerCase);

// concats the string arguments to a calling string and returns a new string
const fullSentence = sentence.concat(' ', 'It is a non-profit organisation.');
console.log(fullSentence);

// determines whether a string ends with the characters of a specified string
// determines whether a string begins with the characters of a specified string
const isTrue = sentence.endsWith('best.');
const isFalse = sentence.startsWith('free');
console.log(isTrue, isFalse); // true, true
