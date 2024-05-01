const my_array = ['Venus', 'mercury', 1997 - 1956];

const firstName = 'Suchitha';
const suchiFriends = ['Bhavana', 'Hema', 'Sandeep', 'Rakesh', 'Janu', 'nori'];

const myData = [firstName, 'Ramachandrapurapu', '24 years', 9182130430, suchiFriends];

console.log(myData);


const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const years = [2000, 1997, 1995, 2002];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));
console.log(calcAge(years[3]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);


const myFriends = ['Sun', 'moon', 'mercury','mars'];
const newLength = myFriends.push('venus');
console.log(newLength);
console.log(myFriends);

myFriends.unshift('Jupiter');
console.log(myFriends);

const valuePopped = myFriends.pop();
console.log(myFriends);
console.log(valuePopped);


myFriends.shift();

console.log(myFriends);

console.log(myFriends.indexOf('moon'));

console.log(myFriends.includes('moon'));



/* Write your code below. Good luck! 🙂 */

function calcTip(billValue){
  let tipValue;
  if(billValue > 50 && billValue < 300 ){
      tipValue = 0.15 * billValue;
  } else {
      tipValue = 0.20 * billValue;
  }
  
  return tipValue;
}

const bills = [125,555,44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);


