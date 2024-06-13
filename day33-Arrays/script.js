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

////////////////////////////////////////////////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////////////////////////////////////////////

// Functions
const displayMovements = function(movements){

  containerMovements.innerHTML = '';//We want all the html tags to get included, for that reason instead of .textContent, we used innerHTML.
  movements.forEach(function(movement, index){
    const type = movement > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${index + 1} ${type}
          </div>
          
          <div class="movements__value">${movement}€</div>
      </div>
      `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
    
  };




const calcDisplayBalance = function(account) {
  account.balance = account.movements.reduce((acc, mov)=> acc + mov, 0);
  labelBalance.textContent = `${account.balance}€ `;
}



const calcDisplaySummary = function(account){
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc,mov) => acc +mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements.filter( mov => mov < 0).reduce((acc,mov)=> acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate).filter(intr => intr >= 1 ).reduce((acc, intr) => acc + intr);
  labelSumInterest.textContent = `${interest}€`
}

let userName;
const createUsernames = function(accounts){
  accounts.forEach(function(account){
  account.userName = account.owner.toLowerCase().split(' ').map((word) => word[0]).join('');
  return userName;
});

}

createUsernames(accounts);

const updateUI = function(account){

      // Display transactions
      displayMovements(account.movements);

      // Display Balance
      calcDisplayBalance(account);
      
      // Display Summary
      calcDisplaySummary(account);

}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Event Handler


// LOGIN IMPLEMENTATION

let currentAccount;
btnLogin.addEventListener('click', function(e){
  //Prevents form from submitting
  e.preventDefault(); 
  currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  //usecase of optional chaining can be seen here, so we are basically checking if the current account exists, if it exists then only we will check if the pin matches
  if(currentAccount?.pin === Number(inputLoginPin.value)){
      // Display UI and welcome message
      labelWelcome.textContent = `Welcome back! ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      // Clear input fields 
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur(); //blur method helps to lose focus, so after user logs in, cursor will not be visible

      updateUI(currentAccount);

  }
});


// MONEY TRANSFER IMPLEMENTATION

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  
  if(recieverAcc && amount > 0 && currentAccount.balance >= amount && recieverAcc?.userName !== currentAccount.userName){
        //Doing transfer
        currentAccount.movements.push(-amount);
        recieverAcc.movements.push(amount);

        updateUI(currentAccount);

  }
});


// IMPLEMENTATION OF CLOSE ACCOUNT

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  
  const closerAcc = accounts.find(acc => acc.userName === inputCloseUsername.value);
  
  if(closerAcc.userName === currentAccount.userName && closerAcc.pin === Number(inputClosePin.value)){    
    const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);
    //Delete account
    accounts.splice(index, 1);//Original array will also get mutated
    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Login to get started`;
      
  }

  inputCloseUsername.value = inputClosePin.value = '';
  

})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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


/*
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

/*movements.map((movement, index) => console.log(`movement ${index + 1}: You ${movement>0 ? `deposited` : `withdrew`} ${Math.abs(movement)}`));*/

/*
// Filter() Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(movement){
  return movement > 0;
});

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter((movement) => movement < 0);

console.log(withdrawals);*/


// Reduce Method


/*const balance = movements.reduce(function(accumulator,currentElement, index, array){
  console.log(`iteration ${index + 1}: ${accumulator}`)
  return accumulator + currentElement;
}, 0);

console.log(balance);


let balance2 = 0;
for(const mov of movements) balance2 += mov;

console.log(balance2);*/

/*const balance3 = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance3);
*/

// Maximum value using reduce method

/*const max = movements.reduce((acc,mov) => {
  if(acc>mov)
    return acc
  else
    return mov;
}, movements[0]);

console.log(max);
*/

// CHAINING METHODS

/*const euroTousd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroTousd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);*/


// FIND METHOD

/*const firstWithdrawal = movements.find(mov => mov < 0); //Unlike filter method, find() method only returns the first value that satisfies the condition

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);*/


