# All about Functions

log - 23-05-24

- [x] - Default Parameters
- [ ] - How passing arguments work: Value vs Reference
- [ ] - First-Class and Higher-Order Functions
- [ ] - Functions Accepting Callback Functions
- [ ] - Functions Returning Functions
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

