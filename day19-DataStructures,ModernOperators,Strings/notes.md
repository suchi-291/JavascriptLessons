# Data Structures, Modern Operators and Strings

Log - 15-05-24

- [x] Logical Assignment Operators
- [ ] Coding Challenge #1
- [ ] Looping Arrays: The for-of Loop
- [ ] Enhanced Object Literals
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

This would work perfectly fine till the value 0 happens to come into picture, suppose the value of numGuests = 0 instead of 20 in rest1 object, then the assignment happens unnecessarily, we would not want that at such times, **nullish assignment operator helps**

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

**This techniques can be used when a variable is already defined and is truthy**
