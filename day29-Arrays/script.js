'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

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


displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*// SLICE METHOD
let arr = ['a','b','c','d','e', 'f', 'g'];
console.log(arr.slice(2));
console.log(arr.slice(1,4));
console.log(arr.slice(-1));
console.log(arr.slice(-4));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);
console.log(...arr);

const sp = 'Winter';
console.log(sp.slice(1,4));


// SPLICE METHOD
//console.log(arr.splice(2));
console.log(arr);
console.log(arr.splice(1,3));
console.log(arr);


// REVERSE METHOD

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT METHOD

const letters = arr1.concat(arr2);

console.log(letters);

console.log([...arr1, ...arr2]);


// JOIN METHOD

console.log(letters.join('-'));
*/



/*
// at() Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last element of an array is simpler with .at() method

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

*/

// Suppose we wanted to print a transaction message for each movement in a bank account

/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const movement of movements){
    movement > 0 ? console.log(`You desposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
}

movements.forEach(function(movement){

    movement > 0 ? console.log(`You desposited ${movement}`) : console.log(`You withdrew ${Math.abs(movement)}`);
    
})



for(const [i, movement] of movements.entries()){
    movement > 0 ? console.log(`Movement ${i + 1}: You desposited ${movement}`) : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}


movements.forEach(function(movement, index, array){
   movement > 0 ? console.log(`Movement ${index + 1}: You desposited ${movement}`) : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});



// forEach() with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
})


const currenciesUnique = new Set(['USD', 'INR', 'USD', 'INR', 'GBP', 'GBP']);

currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}`);
})*/



