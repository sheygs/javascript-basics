/* eslint-disable */
const first = "Olusegun";  // double quotes
const last = 'Ekoh';      // single quotes
const middle = `Olaoluwa`;// backticks

// using escape literal
let sentence = 'She\'s in love with JavaScript';
sentence = "JavaScript is so \"tricky\"";

const greetings = "Hello I am " + first + ". Nice to meet you";

//String interpolation - inserting a variable inside a string (ES6) 
const greetings1 = `Welcome to the JavaScript basics`;  
const html = `
              <div>${greetings}</div>
              <p>${greetings1}</p>
             `;
document.body.innerHTML = html;

/* eslint-enable */
let pizza = 'pepperoni';
let fish = 'tilapia';

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
// typeof - returns the datatype
console.log(typeof 'Pepperoni'); // string
console.log('Pepperoni' instanceof String); // false
/* eslint-disable no-new-wrappers */
console.log(new String('Pepperoni') instanceof String); // true
console.log(String('Pepperoni') instanceof String); // false
console.log(toString('Pepperoni') instanceof String); // false

// ---------------------------STRING METHODS-----------------------------------------------

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

/* determines whether one string may be found in another string */
let found = sentence.includes('s');
const found1 = sentence.includes('code');
const found2 = sentence.includes('organize');
console.log(found, found1, found2); // true, false, false

/* returns the position of the FIRST OCCURRENCE of a specified value in a string
   returns -1 if value not found
*/
let index = sentence.indexOf('f');
// returns the position of the FIRST OCCURRENCE of a specified value from a given index
let index1 = sentence.indexOf('the', 15);
let index2 = fullSentence.indexOf('q');
console.log(index, index1, index2); // 0, 16, -1

/* returns the position of the LAST OCCURRENCE of a specified value in a string
   returns -1 if value not found
*/
index = fullSentence.lastIndexOf('t');
index1 = fullSentence.lastIndexOf('is');
index2 = fullSentence.lastIndexOf('zation');
console.log(index, index1, index2);

/* retrieves the result of matching a string against a regular expression.
   matchAll - PINNED for later
*/
found = sentence.match(/[A-Z]/g);
console.log(found); // ["C", "C"]

/*
 - used to pad string with another string until it reaches a given length
 - padding is applied from the left end of the string
 - string.padStart(targetLength, padString)
   - targetLength: length of the final string after padding, 
    if the length is less than the original string length, the original
    string is returned
   - padString: string to be padded with the original string
*/
pizza = pizza.padStart(12, '***');
fish = fish.padStart(6, '$$$');
const padEnd = fish.padEnd(10, '%%%');
console.log(pizza, fish, padEnd); // ***pepperoni tilapia tilapia%%%

// repeat the string n times
const repeated = pizza.repeat(3);
console.log(repeated); // pepperoni  pepperoni  pepperoni

/* searches a string for a specified value, or a regular expression, 
and returns a new string where the specified values are replaced.
*/
const replace = 'pepperoni'.replace('roni', 'fire');
const replace_ = 'pepperoni'.replace(/^peppe/, 'salt');
console.log(replace, replace_);
console.log('pepperoni'.replace(/oni$/, 'guy'));

// used to split the given string into array of strings by separating it into substrings using a specified separator
console.log('pepperoni pepper'.split(' '));
console.log('pepperoni~pepperoni'.split('~'));
// limits the number of such splits to only 3
console.log('The fox jumped over the dog'.split(' ', 3));

/* extracts a section of a string and returns it as a new string, without modifying the original string.
   - str.slice(beginIndex[, endIndex])
   - beginIndex: zero-based index to begin extraction
     -if -ve, str.length + beginIndex i.e. -3 => str.length - 3
   - if beginIndex is >= str.length, slice() returns an empty string

   - endIndex: The zero-based index before which to end extraction. 
   - slice() extracts up to but not including endIndex
   - if endIndex is omitted, slice() extracts to the end of the string
*/
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31)); // the lazy dog.
console.log(str.slice(4, 19)); // quick brown fox
console.log(str.slice(-4)); // dog.
console.log(str.slice(-9, -5)); // lazy

/*
- extracts the characters from a string, between two specified indices, and returns the new sub string.
- This method extracts the characters in a string between "start" and "end", not including "end" itself.
- Does not modify the original string
- substring(start, end)
 - if end is omitted, substring extracts characters to the end of the string
 - if start is equal end, substring() returns an empty string
 - if start is greater than end, substring() swaps its two argument meaning a string is returned.
 - The slice() method returns an empty string if this is the case
*/
const browser = 'Mozilla';

// Displays M
console.log(browser.substring(0, 1), browser.substring(1, 0));

// Displays Mozill
console.log(browser.substring(0, 6), browser.substring(6, 0));

// Displays lla
console.log(browser.substring(4), browser.substring(4, 7));

/* removes ("trims") spaces from the beginning AND/OR end of the string */
console.log('   4435 2345 342  '.trim());
console.log('   2348 8398 893'.trimStart());
console.log('3478 83898   '.trimEnd());

/* returns a string representing the specified object.
   can also be used to convert an array to string but not flexible as the join() method
   which can specify any separator 
*/
console.log((8).toString()); // "8"
console.log(['1', '2'].toString()); // "1, 2"
