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
