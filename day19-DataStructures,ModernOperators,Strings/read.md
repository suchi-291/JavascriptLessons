# Data Structures, Modern Operators and Strings

Log - 15-05-24

- [ ] Logical Assignment Operators
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

1. Logical Assignment ||=:

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
