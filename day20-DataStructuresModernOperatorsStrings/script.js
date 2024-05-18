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

//Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// We are going to loop over the days array and log on to the console whether the restaurant is open each of the days or not

for (const day of days) {
  //console.log(day);

  //We can not write openingHours.day because day is not a direct property hat exists inside the object. So we are supposed to use bracket notation instead of Dot notation to use variable name restaurant.openingHours[day]

  const open = restaurant.openingHours[day]?.open ?? 'Closed';

  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderDosa?.(0, 1) ?? 'Method does not exist');

//Arrays

const users = [{ name: 'Suchitha', email: 'suryasuchitha@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

// LOOPING OVER OBJECTS

const openingHours = {
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
};

//Looping over property names/keys

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open for ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Looping over values

const values = Object.values(openingHours);
console.log(values);

// Loop over entire object using entries

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Destructuring comes in very handy while usiing for..of loop
