'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risoto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring is an ES6 feature, it is a way of unpacking values from an array or object into separate variables

// Destructuring is to break a complex data structure down to a simpler data structure

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
// This is how we normally separate the elements in array if we want to up untill now

const [x, y, z] = arr;
console.log(x, y, z);
// We will get the same result that we wanted before, we didnt declare each variable separately

// Suggested to declare using const while destructuring

//const [first, second] = restaurant.categories;

//console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//If I wanted to swap the first(main) and third(secondary) as the main and secondary categories, this would be how I would have done it

/*const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);*/

//With out using a new 'temp' variable, the same can be done using destructuring

[main, secondary] = [secondary, main];

console.log(main, secondary);

console.log(restaurant.order(1, 2));

const [starter, mainItem] = restaurant.order(1, 2);

console.log(starter, mainItem);

// Destructuring a nested Array, for this we have to do destructuring inside destructuring

const nested = [2, 4, [5, 6]];

//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//This is very usefule when we are getting data from API
