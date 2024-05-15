# Data Structures, Modern Operators and Strings

Log - 15-05-24

- [x] Logical Assignment Operators
- [x] Coding Challenge #1
- [x] Looping Arrays: The for-of Loop
- [x] Enhanced Object Literals
- [ ] Optional Chaining (?.)
- [ ] Looping Objects: Object Keys, Values, and Entries
- [ ] Coding Challenge #2
- [ ] Sets
- [ ] Maps: Fundamentals
- [ ] Maps: Iteration
- [ ] Which Data Structure to use when
- [ ] Coding Challenge #3
- [ ] Working with Strings
- [ ] String Methods Practice

---

## Logical Assignment Operators

Introduced in ES2021

Note-1: One of the interesting use case of shortcircuiting is for assigning default values. For example, when objects are retrieved from APIS missing data like properties that we were looking for, we can check using || operator and assign default values for the missing data.

1. Logical OR Assignment Operator ||=:

This would work exactly like the usecase mentioned in note-1

```js
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1.numGuests, rest2.numGuests);
```

This would work perfectly fine till the value 0 happens to come into picture, suppose the value of numGuests = 0 instead of 20 in rest1 object, then the assignment happens unnecessarily, we would not want that at such times, ==nullish assignment operator helps==

2. Logical NULLISH Assignment Operator ??= :

```js
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

//rest1.numGuests ||= 10; // Wrong Output
//rest2.numGuests ||= 10;

//console.log(rest1.numGuests, rest2.numGuests); //Output: 10 10 instead of 0 10

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); //output: {name: 'Capri', numGuests: 0}
console.log(rest2); // output: {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
```

3. Logical AND Assignment Operator &&=:

Using &&= operator we can change the already existing values to what we want

```js
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
console.log(rest3); //
```

** This techniques can be used when a variable is already defined and is truthy **

## Looping Arrays For-of Loop

Introduced in ES6

- This loop will automatically loop over entire array and in each iteration it will give us access to the current array element

- With this method we do not have to worry about the counter and all the conditions, And here we can use 'continue' and 'Break' Statements.

```js
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

/* Output:
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risoto*/
```

- The main drwaback is finding out the index of each item is a little complicated

```js
for (const item of menu.entries()) {
  console.log(item);
}

/*
(2) [0, 'Focaccia']
(2) [1, 'Bruschetta']
(2) [2, 'Garlic Bread']
(2) [3, 'Caprese Salad']
(2) [4, 'Pizza']
(2) [5, 'Pasta']
(2) [6, 'Risoto']
*/
```

- .entries() is an array iterator
  It gives a new array which in each position contains a new array that has [elementIndex, element]

## Enhanced Object Literal

1. We can omit the property ame if variable name matches property name.

```js
let name = 'John';
let age = 30;

// ES5
let person = {
  name: name,
  age: age,
};

// ES6
let person = { name, age };
```

2. We can omit the function keyword when defining methods in objects.

```js
// ES5
let obj = {
  foo: function () {
    console.log('Hello');
  },
};

// ES6
let obj = {
  foo() {
    console.log('Hello');
  },
};
```

3. We can use an expression as a property name in an object literal.

```js
// Computed property name
let prop = 'name';
let person = {
  [prop]: 'John Doe',
  ['age' + 1]: 30,
  ['isAdult']: true,
};

console.log(person); // Output: { name: 'John Doe', age1: 30, isAdult: true }
```
