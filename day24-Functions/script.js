'use strict';

//Basic booking functionality
/*const bookingArr = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // We are going to use the data sent in as the arguments to push into bookings array
  // ES5
  // numPassengers ||= 1;
  // price ||= 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookingArr.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);*/

const flight = 'LH234';
const suchitha = {
    name: 'Suchitha Ramachandrapurapu',
    passport: 2435638912345
}

const checkin = function(flightNum, passenger){
  flightNum = 'LH999';
  passenger.name = 'Ms ' + passenger.name;

  if(passenger.passport === 2435638912345){
    alert('Check in');
  }else{
    alert('Wrong password');
  }
}

//checkin(flight, suchitha);
//console.log(flight);
//console.log(suchitha);

// Is the same as doing...
const flightNum = flight;
const passenger = suchitha;

const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(suchitha);
//checkin(flight,suchitha);


// Functions accepting call back functions

const oneWord = function(str){
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
  const [first, ...others]= str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn){
  console.log(str);
  console.log(`Transformed String: ${fn(str)}`);// Inside the higher order function, here we are passing arguments instead, this function used as the argument in the higher-order function can use another argument which is being passed in the higher-order function.

  //Since functions are objects, they also have methods, for instance .name method gives the name of the function

  console.log(`Transformed by: ${fn.name}`);

}

transformer('Javascript is relatively easy for a beginner', upperFirstWord);//Observe how no arguments are being passed in to upperFirstWord function. 

transformer('Javascript is relatively easy for a beginner', oneWord);

const hello = function(){
  console.log("Hello there, it's Rizz, Have you clicked???");
}

document.body.addEventListener('click', hello);



// Functions returning Functions
//Incase of returning funtions, they are going to have arguments.
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey'); /// The greet function here, it is returning a function, when I saved this into the greeter Hey variable it's like I am equating a function expression into greeterHey, so now greeterHey would act like the function which I have defined like a function expression in the greet function, return statement.
greeterHey('Suchi');
greeterHey('Harry');

// This also works like this

greet('Hello')('Boo');

const sayHello = (greeting) =>
  (name)=> console.log(`${greeting} ${name}`);

sayHello('Hi Babe')('..');

// Call and Apply Methods

