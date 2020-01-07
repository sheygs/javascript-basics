/*
 3 ways to declare a variable are: var, let & const
 -------------------------------------------------------------------
 -> var
    - Can be initialized
    - Can be updated
    - function scoped; only available inside the parent function

 -> let
    - Can be initialized 
    - Can be updated
    -  blocked scoped {}

 -> const
    - Can't be initialized (MUST be assigned a value)
    - Can't be updated
    - blocked scoped {}
    -----------------------------------------------------------------
    - Variable declaration statements in JS are similar 
    to statements in English
    - Variable declaration statements are used to "do" something
    - Variable declaration statements end in a semi-colon (;) 

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
    - Names cannot contain symbols or begin with a symbol
    - Names cannot begin with a number
    - Names can contain a mix of uppercase strings, lowercase strings & numbers
*/

// line below necessary to disable eslint rules  for illustration
/* eslint-disable */ 
'use strict';
var name;  //variable initialization
console.log(name);  //returns undefined

var first = 'Olusegun'; //variable declaration statement
first = 'Segun'; //variable reassignment

let age = '24'; //variable declaration
age = '25'; //variable reassignment

const gender = 'Male';
//gender = 'Female'; //error, can't reassign const variables


isMarried = false;  
console.log(isMarried); //returns undefined in strict mode, otherwise, false
