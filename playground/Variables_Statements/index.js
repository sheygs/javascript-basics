/*
 3 ways to declare a variable are: var, let & const
 -------------------------------------------------------------------
 -> var
    - Can be initialized
    - Can be updated
    - function scoped; only available inside the parent function
    - Can be redeclared in the same scope
 -> let
    - Can be initialized 
    - Can be updated
    -  blocked scoped {}
    -  Can't be redeclared in the same scope
 -> const
    - Can't be initialized (MUST be assigned a value)
    - Can't be updated
    - blocked scoped {}
    - Can't be redeclared in the same scope
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
    - Names cannot contain symbols or begin with a symbol except $ and _
    - Names cannot begin with a number
    - Names can contain a mix of uppercase strings, lowercase strings & numbers
    - camelCasing is applied to names containing more than one word
    - Only constructor names should start with a capital letter as the first word
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


//isMarried = false;  
//console.log(isMarried); //returns undefined in strict mode, otherwise, false
