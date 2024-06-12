# Working with Arrays

log - 12-06-24

- [x] - Simple Array Methods
- [x] - New at method
- [x] - Looping Arrays: forEach
- [x] - forEach with Maps and Sets
- [x] - Project Bankist
- [x] - Creating DOM elements
- [x] - Data Transformations: Map, Reduce, Filter
- [x] - map method
- [x] - computing usernames
- [x] - filter method
- [x] - reduce method
- [x] - magic of chaining methods
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


## Project - Bankist App (Part-1)

Bankist is a minimalist banking app - an online bank interface (that uses maximum power of arrays in js)

- The app shows transactions
- overall balance
- summary
- We can perform three things, transfer money to someone else, request a loan from the bank, also close the bank account.

**FlowChart**

![Flow Chart image](Bankist-flowchart.png)


Entire project, 4 actions can be performed

1. User can login/logout
2. User can transfer money
3. User can request for loan
4. User can close account

**Login**
User logs in by entering the credentials, if the credentials are correct then the latest updated UI should be displayed. i.e., we calculate and display the balance, we calculate and display the summary, we display transactions. We will also display a logout timer.

A notable point on why we have the user data as objects instead of maps is, the real time data we obtain from the web APIs come in the form of objects.

- DOM manipulation techniques in collaboration with forEach() method

what's happening during login-

When we are loggin in the opacity of .app selector is changed, before logging in the opacity = 0, hence we wont be able to see the entire UI covered in the main section.

What we need to do?
Display the transactions, for this inside script tag, we created a html template.

we want the transactions array inside account object to get displayed in the movements container, Since we want this to happen for all the bank accounts, we need a function that does this task.

so we created the function, displayMovements. this function takes movements property and for this array we created a loop using forEach. For each value in the movements array, we want to display HTML movement -row, for this we created a html template

```js
const displayMovements = function(movements){

  containerMovements.innerHTML = '';//We want all the html tags to get included, for that reason instead of .textContent, we used innerHTML.
  movements.forEach(function(movement, index){
    const type = movement > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${index + 1} ${type}
          </div>
          
          <div class="movements__value">${movement}</div>
      </div>
      `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
    
  };
```

To display the row inside movements div block we used DOM method .insertAdjacentHTML()

**.insertAdjacentHTML()** - accepts two arguments - two strings, 
- the first string is the place we want to attach html, top outside(***beforebegin***) of parent element or top inside(***afterbegin***) of parent element, bottom inside(***beforeend***) or bottom outside(***afterend***).
- the second argumentis the strin containing html element. 

## Data Transformations: map, filter, reduce

The three array methods map, filter, reduce methods are used to create arrays by transforming data from other arrays.

**map** - map() method is used to loop over arrays similar to forEach method, but the difference is, map creates a new array based on the original array.

map method takes an array, loops over an array and in each iteration it applies a callback function we specify, to the current element.

***map returns a new array containing the results of applying an operation on all original array elements***

**filter** - filter() method is used to filter elements which satisy a condition from original array.

***filter rreturns a new array containing the array elements that passed a specified test condition***

**Reduce** - we will have an accumulator variable, reduce method loops over array elements.

- in end we get a single value

***reduce method boils(reduces) all array elements down to one single value (Ex.. multipying all array elements).***


## map() method

it also works like forEach only, but the relut we get is a new array

```js
// Map() method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroTousd = 1.1;

const movementUsd = movements.map(function(movement){
 return movement * euroTousd;
})

console.log(movements);
console.log(movementUsd);

const movementInr = movementUsd.map((movement) => movement * 83.49);
console.log(movementInr);

/*movements.map((movement, index) => movement > 0 ? console.log(`Movement ${index + 1}: You desposited ${movement}`) : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`));*/

movements.map((movement, index) => console.log(`movement ${index + 1}: You ${movement>0 ? `deposited` : `withdrew`} ${Math.abs(movement)}`));

```

## project - Bankist (part-2)

### Computing usernames

We will generate username based on the owner name

```js
const createUsernames = function(accounts){
  accounts.forEach(function(account){
  account.userName = account.owner.toLowerCase().split(' ').map((word) => word[0]).join('');
  return userName;
});
}

createUsernames(accounts);

console.log(account1.userName);
console.log(account2.userName);
console.log(account3.userName);
console.log(account4.userName);
```


## Filter method

Using the filter method, we can filter out elements from a given array based on a certain condition.
Here also we use a callback function and the arguments are element, index and array, just like we use in map() and forEach().

Returns an array

```js
// Filter() Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(movement){
  return movement > 0;
});

console.log(movements);
console.log(deposits);
```


## Reduce() Method

- boil down an array into one sngle value.

```js

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(accumulator,currentElement, index, array){
  console.log(`iteration ${index + 1}: ${accumulator}`)
  return accumulator + currentElement;
}, 0);

console.log(balance);

```

map, filter, reduce - all three array methods call a call back function for each iteration.

- **.reduce()** method takes in two parameters, the first parameter is the callback function and the second parameter is the initial value of the accumulator in the first loop of iteration.

We can also perform different things using reduce other than addition, like finding max value, min value, multiplication of values etc

```js
// Maximum value using reduce method

const max = movements.reduce((acc,mov) => {
  if(acc>mov)
    return acc
  else
    return mov;
}, movements[0]);

console.log(max);

```

## project Bankist (part-3)

- using reduce method, all the transaction amounts will be added and displayed in the current balance.

```js

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, mov)=> acc + mov, 0);
  labelBalance.textContent = `${balance}€ `;
}

```

## Chaining Methods

We can chain methods map, filter, reduce. To be able to chain the first method must return an array.

```js
const euroTousd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroTousd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
```

## Project Bankist (part-4)

**Calculation of sum of all deposits, sum of all withdrawals and interest rate using method chaining**

```js
const calcDisplaySummary = function(movements){
  const incomes = movements.filter(mov => mov > 0).reduce((acc,mov) => acc +mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements.filter( mov => mov < 0).reduce((acc,mov)=> acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2/100).filter(intr => intr >= 1 ).reduce((acc, intr) => acc + intr);
  labelSumInterest.textContent = `${interest}€`
}

```

**Note**
1. Chaining should not be overused, but optimized because chaining many times to arrays with large data would cause performance issues.
2. It is a bad practice to chain methods that mutate the original array, ex: splice() method.