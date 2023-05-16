'use strict';
let name = 'Mary';
function greetPeople() {
  let name = 'Clause';
  console.log(`Hello ${name}`);
}
greetPeople();

//  The output of the program will be Hello Clause since the function will first look for the name variable in its
// function scope before moving to the global scope and since its presient in its scope it will use Clause instead
// of Mary to replace the name variable in the console log method.
