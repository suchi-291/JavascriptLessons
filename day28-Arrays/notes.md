# Working with Arrays

log - 04-06-24

- [x] - Simple Array Methods
- [x] - New at method
- [x] - Looping Arrays: forEach
- [x] - forEach with Maps and Sets
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

5. .join() : it outputs a string of array elements.
```js
const myArr = [1,2,3,4,5];
console.log(myArr.join('-')); //output - '1-2-3-4-5'
```

6. .at() : it takes index as argument, it gives the result of array element at the passed index.

We can use bracket notation or at method anything is fine, but .at() method is very handy to use for method chaining.


.at() method also works for strings.


```js
// at() Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element of an array is simpler with .at() method

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

```

## Looping Arrays using: forEach

forEach() is a method, it requires a call back function. Technically forEach() is a higher-order function that needs a call back function.

forEach() method loops over an array and for each iteration it executes the call back function. As it executes the function, it sends in the current element of the array as the argument.

When we are using forEach()method, the call back function has three parameters in the following order, (array_element, array_element_index, array). 

```js

movements.forEach(function(movement, index, array){
   movement > 0 ? console.log(`Movement ${index + 1}: You desposited ${movement}`) : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});
```

**When to use For..of loop and when to use For...each loop**

The fundemental difference between for..of loop and for..each loop is that we can not break out of the for..each loop like we can break out of for..of loop using break and continue statements.

Continue and break statements can not be used in for...each loop.

## forEach with Maps and sets

```js
// forEach() with map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
})

// forEach() with set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function(value, key, map){
     console.log(`${key}: ${value}`);
})

```
The output is not expected, it is treating the set like a map, so we usually dont use the second parameter inside the call back function.


## Project - Bankist App



