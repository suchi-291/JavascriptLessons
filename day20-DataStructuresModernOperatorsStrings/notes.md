# Data Structures, Modern Operators and Strings

Log - 17-05-24

- [x] Logical Assignment Operators
- [x] Coding Challenge #1
- [x] Looping Arrays: The for-of Loop
- [x] Enhanced Object Literals
- [x] Optional Chaining (?.)
- [x] Looping Objects: Object Keys, Values, and Entries
- [x] Coding Challenge #2
- [ ] Sets
- [ ] Maps: Fundamentals
- [ ] Maps: Iteration
- [ ] Which Data Structure to use when
- [ ] Coding Challenge #3
- [ ] Working with Strings
- [ ] String Methods Practice

---

## Optional Chaining (?.)

- Optional chaining is a feature of Arrays and Objects

- When we use, If certain property of an object does not exist, then undefined will be outputted immediately.

**Note:** Like the nullish operator, the property is said to exist as long as it is neither null nor undefined

- We can have multiple optional chaining

- Both **Optional Chaining operator** and the **Nullish Coalesing Operator** work well together and were introduced in ES2020

- Optional Chaining works well for methods as well. i;e., We can check whether a method exists before we call it.

- It works on **Arrays** as well, it checks if an array is empty.

## Looping Objects: Object Keys, Values, and Entries

We are basically creating an array using Object.keys(<objectName>), Object.values(<objectName>), we can get an array of properties and an array of values and then perform the FOR...OF loop.

We can loop over entire object using 'Entries'.

- In Arrays, .entries() method yields array index and array element.
- In Objects, Object.entires() method yields array of arrays, but unlike arrays usage case we get key and values instead of index and array element.
