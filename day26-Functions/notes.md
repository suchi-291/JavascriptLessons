# All about Functions

log - 27-05-24

- [x] - Default Parameters
- [x] - How passing arguments work: Value vs Reference
- [x] - First-Class and Higher-Order Functions
- [x] - Functions Accepting Callback Functions
- [x] - Functions Returning Functions
- [x] - The Call and Apply methods
- [x] - The bind Method
- [x] - IIFE - Immediately Invoked Function Expressions
- [x] - Closures

## Default Parameters

Up unitl ES5 we were required to use short circuiting to set default values to the arguments inside the function, but from ES6+ we can set the default parameters in the argument itself.

- This point needs to be remembered, from what I understood, if we are computing an value using the any argument. For example we have three arguments movieName, audience, ticket price. I can calculate ticket price based on the argument audience by default.

```js
const bookings = [];
const bookMyShow = function (
  movieName = 'Hanuman',
  audience = 1,
  ticketPrice = audience * 250
) {
  const movie = {
    movieName,
    audience,
    ticketPrice,
  };

  console.log(movie);
  bookings.push(movie);
};

bookMyShow(); //output: {movie: 'Hanuman', audience = 1, ticketPrice = 20}
```

- Next, I need to not skip arguments to avoid error. Suppose I dont enter the audience but enter price, then automatically it will get treated as audience and then default compuation takes place, to avoid that if we dont have the data for the argument we are sending instead of skipping we must use the argument undefined.

```js
const bookings = [];
const bookMyShow = function (
  movieName = 'Hanuman',
  audience = 1,
  ticketPrice = audience * 250
) {
  const movie = {
    movieName,
    audience,
    ticketPrice,
  };

  console.log(movie);
  bookings.push(movie);
};

bookMyShow('Om Bheem Bhush', undefined, 300); //output: {movie: 'Om Bheem Bhush', audience = 1, ticketPrice = 300}
```

## How Passing Arguments Works: Value vs. Reference

When primitive values are passed in as arguments, it will be a copy of the original value.
When we are passing object values inside the function it means we are passing reference to the object in the memory

We are basically creating copies, but for primitive value copy gets created and a new memory gets used. But for the object - reference type, the copy also will point to the same reference address so the object value will get changed.

- If we dont keep this in mind, and send objects as arguments and maake changes to their values, there can be serious consequences.

- **Passing by Value**, **Passing by Reference** ---> It could be confusing when hearing such statements, but in javascript, all we have is ***Passing by Values***, not passing by reference.

## First Class and Higher-Order Functions

Js has First class functions i.e., we can use functions as variables, we can pass them into functions, call them inside functions and even return from a function, this allows us to write higher - order functions. 

- Js treats functions as values.
- Js treats functions as values just because they are just another type of **object**.
- Since functions are values we can do lot of things we can do with them like
1. Storing them in variables or in objects as object properties.
2. We can pass functions as arguments into other functions
3. Return a function from another function
4. Since functions are also objects, they also have methods.


### Higher Order Function
 
 It is a function that recieves another function as an argument and then returns a new function or both.

 Ex. Event handler function - .addEventListener(click, taskFunction)

 taskFunction here is called as **CallBack function**. It is called as so, because the Higher order function calls this function later.


 Note: There is no first-class function in practice - It is just a concept/feature that all the functions are treated as values.

## Functions accepting Callback functions - (HIGHER ORDER FUNCTIONS)

```js

// Higher order function
const transformer = function (str, fn){
  console.log(str);
  console.log(`Transformed String: ${fn(str)}`);// Inside the higher order function, here we are passing arguments instead, this function used as the argument in the higher-order function can use another argument which is being passed in the higher-order function.

  //Since functions are objects, they also have methods, for instance .name method gives the name of the function

  console.log(`Transformed by: ${fn.name}`);

}

transformer('Javascript is relatively easy for a beginner', upperFirstWord);//Observe how no arguments are being passed in to upperFirstWord function. 

transformer('Javascript is relatively easy for a beginner', oneWord);
```

- Js always uses call back functions. because it makes it easy to split up the code and keep the code interconnected with reusable parts. Another major advanctage of call back functions is that they allow us to create abstraction.

- We shall encounter abstraction in a lot more details during the Object Oriented Programming.

## Functions returning Functions

```js
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

greet('Hello')('Mickey');
```

This phenomenon which we have saw works because of **Closure**
This is very helpful for functional programming.

## Call and Apply Methods


Consider this, we created a method using this keyword inside an object, we want the method to be applied on various other objects as well. If we try to save object.method in a function and then call it we get an error, saying values cannot be fethed from undefined property. This is because inside a regular function call, "This" keyword will point towards "undefined".

```js
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
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};


const book = lufthansa.book;


//book(23, 'Harr potter'); ---> this would give an error

// Three function methods, call, apply and bind will help us with using the methods defined in an object having this keyword to be reused.

//book() is a function, defined inside an object so it is method. But basically since it is a function, it can have methods.

book.call(eurowings, 23, 'Sarah W'); // Call method
console.log(eurowings);
console.log(eurowings.bookings); 

// Apply Method

const flightData = [583, 'George Williams'];
book.apply(swiss, flightData);
console.log(swiss);


// Bind method

const bookEw = book.bind(eurowings);// Now when we call using the bind() method, a new function will get created where the "this" keyword is always set to eurowings.

bookEw(789, 'Stephen Mc Avoy');

console.log(eurowings);
 
const bookSw = book.bind(swiss);

bookSw(841, 'Richa Gonzalez');
console.log(swiss);

const bookEw23 = book.bind(eurowings, 23);// Using the bind method this way we can pre-set a value this way, now we only need to pass in the name argument into the function whenever we need to call.

bookEw23('Rita Samaritan');


```

**Call Method** - Call method allows us to set the this keyword to the object we want explicitly. The first argument of the call method is the object we want the this keyword to point towards. The rest of the arguments are the same original arguments the function has.


**Apply Method** - The Apply method works the same way as the call method, but the difference is, it does not accept the arguments of the function after the this keyword object, instead it accepts an array of the arguments. The arguments taken from the array are passed into the function.


## Bind Method

Just like the call() and apply() methods, bind() method also helps us to set "This" keyword manually. The difference is, bind does not call the function, instead it returns a new function, where the this keyword is bound.

**Partial Application** - The practice of Specifiying parts of an argument before hand. Partial Application means, part of the arguments of the original function are already applied(set).

**Use-Case - bind method used for DOM**

```js
// Use-case - With Event-listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this.planes);
}

//console.log(lufthansa);

const myButton = document.querySelector('.buy');


myButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// For event listeners "this" keyword always points towards the element to which the event handler is attached.

```

**Use Case - Partial Application**

```js
//Use-Case partial application - here it is not about this keyword

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null,0.23);
// addVAT = value => value * 0.23;

```

## Immediately Invoked Function Expressions (IIFE)

A function that disappears immediately afte called.

IIFE is apattern that helps to hide variables from being overwritten with the help of functions scoping.


Similarly even, let and const also create scopes.

```js
const runOnce = function(){
    console.log("This will never run again");
}


runOnce();

// Now we can call as many times as we can, but if we want the function to only get called once, then we should use Immediately Invoked Function expression(IIFE)

//IIFE

(function(){
    console.log("This will not be outputted again");
})();

// The above of pattern of calling a function by tricking to run function expression to as statement is the Immediately Invoked Function Expression (IIFE) 

(() => console.log("This also shall be outputted only once"))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(isPrivate);//output - error: isPrivate not defined.
console.log(notPrivate);

```

**Note** - In modern Javascript to create a new scope instead of using IIFE, creating a block of code with let, const is preferred.


## Closures

Closures concept is an amalgamation of concepts like execution context, call stack, and the scope chain.

- Closures are not features that we will manually create like arrays or a new function.

```js
// Closures

const secureBooking = function(){
    let passengerCount = 0; //The plan is We don't want the passenger count here to be manipulated from outside

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }

}


const booker = secureBooking();

booker();
booker();

```

- Consider the above code, talking in terms of how execution takes place in the call stack..

- Initially the Global execution context has secureBooking() function. Unless and untill Booker has a value assigned in it, it wont come in the Global execution context, this must be kept in mind. In the global scope variable "secureBooking"

- When the secureBooking function gets executed/called, function execution context of secureBooking function occurs on top of the Global execution context. This function context has only one variable which is passengerCount, It will return the function, after returning, the value gets stored in the "Booker" variable and this Function execution context of secureBooking app disappears.

- In the function scope, there is passengerCount variable and the parent scope i.e., global scope has secureBooking()

- So now again the global context has Booker() along with secureFucntion() and Global scope has Booker()


- When we look at the output when booker() funtion is called we can see that it is getting access to the variable passengerCount even though the execution context of the function secureBooking() disappeared


**A closure makes a function remember all the variables that existed at the function's birth place**

- When booker function gets executed, a new function execution context for the booker() function appears on top of the Global execution context. But the variable environment would be empty because no variables were declared in the function.

- Now the function scope will have no variables in child while parent scope has booker(), secureBooking().

- The secret of closure is, **Any function always has access to the variable environment of the execution context in which the function was created**

- That is why even though the execution context of secureBooking() function disappeared, booker() function can access it's variable passengerCount.

**Closure** - It is the Variable Environment attached to the function, exactly as it was at the time and place the function was created.