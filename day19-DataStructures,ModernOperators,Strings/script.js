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

//LOGICAL ASSIGNMENT OPERATORS

//OR ASSIGNMENT OPERATOR

//Consider the below example, suppose we got data of rest1, rest2 from an API, we wnat to access the numGuests property from these objects, but since the objects were retrieved from an API, they could be missing the property numGuests, fro usch objects we want them to include numGuests property but with a defaul value....

// This can be achieved using shortCircuiting

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//console.log(rest1.numGuests, rest2.numGuests);

//NULLISH ASSIGNMENT OPERATOR - 0, '' are true, (null, undefined are falsy)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1.numGuests, rest2.numGuests);
console.log(rest1);
console.log(rest2);

//LOGICAL && ASSIGNMENT OPERATOR

// Using &&= operator we can change the already existing values to what we want

const rest3 = {
  name: 'Capri',
  numGuests: 0,
};

const rest4 = {
  name: 'La Piazza',
  owner: 'Ratatoulie',
};

//rest3.owner = rest3.owner && '<Anonymous>'
//rest4.owner = rest4.owner && '<Anonymous>';
//console.log(rest3);//output: {name: 'Capri', numGuests : 0, owner: undefined}
//console.log(rest4); //ouptut: {
// output: {name: 'La Piazza', owner: 'Anonymous'}
rest3.owner &&= '<Anonymous>';
rest4.owner &&= '<Anonymous>';
console.log(rest4); // output: {name: 'La Piazza', owner: 'Anonymous'}
console.log(rest3); // output: {name: 'Capri', numGuests: 0}

//LOOPING ARRAYS - FOR OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// This loop will automatically loop over entire array and in each iteration it will give us access to the current array element

// With this method we do not have to worry about the counter and all the conditions, And here we can use 'continue' and 'Break' Statements.

for (const item of menu.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  //console.log(item);
  console.log(`${i + 1}: ${el}`);
}

//.entries() is an array iterator
