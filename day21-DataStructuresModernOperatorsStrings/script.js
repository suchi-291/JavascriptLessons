'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risoto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //24 hours open
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Dosa', 'Bajji', 'Pasta']);
console.log(orderSet);

console.log(new Set('Suchitha'));

console.log(orderSet.size);

console.log(orderSet.has('Dosa'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Dosa');
console.log(orderSet);
//orderSet.clear();

for (const order of orderSet) console.log(order);

// Use Case - 1 REMOVE DUPLICATE ELEMENTS FROM AN ARRAY.

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const positions = [...new Set(staff)];
console.log(positions);

//Note: Spread operator works on all iterables. - spread operator takes out all the elements inside an iterable and writes them comma separated

console.log(new Set(staff).size);

console.log(new Set('Suchitha Ramachandrapurapu').size);

// MAPS

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest);

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
//console.log(rest.size);
rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); //Output: undefined

// This does not work because of how objects and primitive values are stored in the memory.

//Instead of directly placing array in the set method, if we declare the array and place that array in the map, then we will be able to call it.

const arr = [7, 8];

rest.set(arr, 'test2');

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading'); // This is an object property

console.log(rest);

// MAPS ITERATION

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 👍'],
  [false, 'Try Again'],
]);

console.log(question);

// CONVERTING OBJECT TO MAP
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

for (const i of question) {
  console.log(i);
}

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

/*const answer = Number(
  prompt(
    `${question.get(
      'question'
    )}\n 1. C \n 2. Java \n 3. Javascript \n Choose either 1 or 2 or 3`
  )
);

console.log(question.get(answer === 3));*/

// Convert a Map  to an Array

const newArray = [...question];
console.log(newArray);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());
