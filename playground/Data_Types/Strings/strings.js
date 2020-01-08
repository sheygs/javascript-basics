/* ------------------STRINGS-----------------------------------------
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