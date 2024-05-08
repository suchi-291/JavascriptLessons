'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating a NEW variable with same name as outerscope variable
      const firstName = 'Leela';

      //Reassigning outerscope variable with a new value
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;

      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(output);
    //add(1, 2);
    //console.log(str);
    console.log(millenial);
    console.log(firstName);
  }

  printAge();
  return age;
}

const firstName = 'Suchitha';
calcAge(1991);
//printAge();
//console.log(age);

//HOISTING IN PRACTICE

//<Hoisintg with Variables>

//console.log(me);--------->//when declared with var, it allowed hoisting but the value is undefined
//console.log(job);---------->//The variable 'job' can not be hoisted before it's declaration because it was declared with the keyword Let, and currently the variable is in Temporal Dead Zone
//console.log(year);---------->//The variable 'year' can not be hoisted before it's declaration because it was declared with the keyword const, and currently the variable is in Temporal Dead Zone

var me = 'Suchi';
let job = 'Developer';
const year = 2024;

//<Hoisting with Functions>

console.log(adding(1, 2));
//console.log(addValues(1, 2));
//console.log(addThem(1, 2));
console.log(addThem);
console.log(addValues);

function adding(a, b) {
  return a + b;
}

/*const let*/ var addValues = function (a, b) {
  return a + b;
};

/*const let*/ var addThem = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 2;
let y = 3;
const z = 4;
