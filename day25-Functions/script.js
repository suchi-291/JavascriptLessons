'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight : `${this.iataCode}${flightNum}`}, name);
    }
    
}

lufthansa.book(239, 'Suchitha');
lufthansa.book(534,'Madhavi R');
console.log(lufthansa.bookings);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};


const book = lufthansa.book;

//book(23, 'Harr potter'); ---> this would give an error

// Three function methods, call, apply and bind will help us with using the methods defined in an object having this keyword to be reused.

//book() is a function, defined inside an object so it is method. But basically since it is a function, it can have methods.

book.call(eurowings, 23, 'Sarah W');
console.log(eurowings);
console.log(eurowings.bookings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 580, 'Mary Bun');
console.log(swiss);


// Apply Method

const flightData = [583, 'George Williams'];
book.apply(swiss, flightData);
console.log(swiss);


book.call(swiss, ...flightData);

// Bind method

const bookEw = book.bind(eurowings);// Now when we call using the bind() method, a new function will get created where the "this" keyword is always set to eurowings.

bookEw(789, 'Stephen Mc Avoy');

console.log(eurowings);
 
const bookSw = book.bind(swiss);

bookSw(841, 'Richa Gonzalez');
console.log(swiss);

const bookEw23 = book.bind(eurowings, 23);// Using the bind method this way we can pre-set a value this way, now we only need to pass in the name argument into the function whenever we need to call.

bookEw23('Rita Samaritan');

// Use-case - With Event-listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this.planes);
}

const buyPlane = lufthansa.buyPlane;

//console.log(lufthansa);

const myButton = document.querySelector('.buy');


myButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// For event listeners "this" keyword always points towards the element to which the event handler is attached.


//Use-Case partial application - here it is not about this keyword

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null,0.23);
// addVAT = value => value * 0.23;

console.log(addVAT(100));

//const adTax = (rate, value) => value + value*rate;

//const adVAT = 

/*const greet = function(greeting){
    return function(name){
      console.log(`${greeting} ${name}`)
    }
  }
  
  const greeterHey = greet('Hey'); /// The greet function here, it is returning a*/ 


const adTax = function(rate){
    return function(value){
         return (value + value*0.23);
    }
}

const adVat = adTax(0.23);

console.log(adVat(100));