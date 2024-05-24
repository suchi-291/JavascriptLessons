# All about Functions

log - 23-05-24

- [x] - Default Parameters
- [x] - How passing arguments work: Value vs Reference
- [x] - First-Class and Higher-Order Functions
- [x] - Functions Accepting Callback Functions
- [x] - Functions Returning Functions
- [ ] - The Call and Apply methods
- [ ] - The bind Method
- [ ] - IIFE - Immediately Invoked Function Expressions
- [ ] - Closures

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