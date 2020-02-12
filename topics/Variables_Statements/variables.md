## Variables & Statements

* A _variable_ is a container for storing a value. The contained value can change, and the variable may hold different types of data. _variable_ declaration statements end in a semi-colon `;`

* The following is a sequence in which variable declaration & initialisation occurs.

  ```
     Declaration -> Initialisation/Assignment -> Usage
  ```


* Three (3) ways to declare a _variable_ are __var__, __let__ and __const__.

* __var__
 
 * Can be declared
 * Can be redeclared inside a scope i.e. can be declared inside of its scope more than once.
 * Can be reassigned/updated
 * Is __function scoped__; only available inside the parent function.

* __let__

 * Can be declared
 * Can't be redeclared inside of its scope i.e. can only be declared inside of its scope once.
 * Can be updated
 * Is __blocked scoped__ `{}`

* __const__
 
 * Can't be declared (must be initialised/assigned a value).
 * Can't be redeclared inside of its scope.
 * Can't be updated.
 * Is __blocked scoped__ `{}`
 * The properties of `const` variables can change when assigned to an object/array.


* The purpose of `use strict` is to indicate that the code should be executed in "strict mode". With "strict mode", you cannot use undeclared variables.

Useful Tips:

* use __const__ by default
* use __let__ when the value of the variable is to be changed.

## Naming Variables

* Names should begin with a lowercase string
* Names cannot contain symbols or begin with a symbol except `$` and `_`.
* Names cannot begin with a number.
* Names can contain a mix of uppercase strings, lowercase strings & numbers
* camelCasing is applied to names containing more than one word
* Only constructor names should start with a capital letter as the first word