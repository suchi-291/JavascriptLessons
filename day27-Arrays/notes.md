# Working with Arrays

log - 01-06-24

- [x] - Simple Array Methods
- [ ] - New at method
- [ ] - Looping Arrays: forEach
- [ ] - forEach with Maps and Sets
- [ ] - Project Bankist
- [ ] - Creating DOM elements
- [ ] - Data Transformations: Map, Reduce, Filter
- [ ] - map method
- [ ] - computing usernames
- [ ] - filter method
- [ ] - reduce method
- [ ] - magic of chaining methods
- [ ] - find method
- [ ] - Implementing login
- [ ] - Implementing Transfers
- [ ] - findIndex method
- [ ] - some and every
- [ ] - flat and flatMap
- [ ] - sorting Arrays
- [ ] - more ways of creating and Filling arrays
- [ ] - which array method to use when
- [ ] - Array methods in practice

## Simple Array Methods

Methods are nothing but the functions attached to objects. Arrays are also objects.

All arrays in js have access to the following methods because of prototypal inheritance.

1. .slice(): We can access a part of an array without breaking it.
slice(startingIndex, endingindex)
 - the value before the ending index will be outputted, value at the ending index wont be outputted.
 - The length will be the endingIndex - startingIndex.
 - Using .slice() method we can create shallow copies of an array by not passing in any arguments.
 - Shallow copies of an array can be created by using either spread operator or .slice() method it's upto developer's preference.

2. .splice():splice() method also works in the same way as .slice() method, but the difference is .splice() method changes the original array. The original array will lose the extracted part.
syntax - .splice(startingIndex, deleteCount) - startingindex to element
- Majority of the time we use splice method if we want to remove elements which we don't want the array to contain.
- the first argument is starting index, next argument is the ending index - array elements from the starting index to element at the ending index will get removed.

3. .reverse(): Reverse method reverses an array, it also mutates the original one.

4. .concat(): This method is used to concatenate two arrays. Final array will have all the elements of both arrays

5. .join() : 