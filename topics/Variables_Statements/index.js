/*
  Variable:
    - It is like a container for storing a value
    - The contained value can change
    - variables may hold different type of data
    
 3 ways to declare a variable are: var, let & const
 -------------------------------------------------------------------
 -> var
    - Can be declared
    - Can be redeclared inside of its  scope i.e. can be declared inside of its scope more than once
    - Can be updated/reassigned
    - function scoped; only available inside the parent function

 -> let
    - Can be declared
    -  Can't be redeclared inside of its scope i.e. can only be declared
    inside of its scope once
    - Can be updated
    -  blocked scoped {}
   
 -> const
    - Can't be declared (MUST be initialised/assigned a value)
    - Can't be redeclared inside of its scope i.e. can only be declared
    inside of its scope once.
    - Can't be updated
    - blocked scoped {}
    -----------------------------------------------------------------

    - Variable declaration statements in JS are similar 
    to statements in English
    - Variable declaration statements are used to "do" something
    - Variable declaration statements end in a semi-colon (;) 

    - The following is a sequence in which variable declaration & initialisation occurs.
      
      Declaration -> Initialisation/Assignment -> Usage
     
    -----------------------------------------------------------------

    -The purpose of  'use strict' is to indicate that the code
    -should be executed in "strict mode"
    -With strict mode, you cannot, for example use undeclared variables

    -----------------------------------------------------------------

    Which keywords should I use ?
    1) Use 'const' by default
    2) Use 'let' if the value of the variable is to be changed

    ------------------------------------------------------------------

    NAMING VARIABLES
    - Names should begin with a lowercase string
    - Names cannot contain symbols or begin with a symbol except $ and _
    - Names cannot begin with a number
    - Names can contain a mix of uppercase strings, lowercase strings & numbers
    - camelCasing is applied to names containing more than one word
    - Only constructor names should start with a capital letter as the first word
*/

// line below necessary to disable eslint rules  for illustration
/* eslint-disable */ 
'use strict';
var name;  // declaration
console.log(name);  // undefined

var first = 'Olusegun'; // Declaration & Assignment
first = 'Segun'; // Reassignment

let age = '24'; // Declaration & Initialisation
age = '25'; // Reassignment

let a; // Declaration
a = 100; // Assignment
console.log(a); // usage

const gender = 'Male';
//gender = 'Female'; //error, can't reassign const variables

//isMarried = false;  
//console.log(isMarried); //returns undefined in strict mode, otherwise, false
