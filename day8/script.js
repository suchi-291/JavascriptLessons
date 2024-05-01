'use strict';

function logger() {
  console.log('My name is Suchi');
}

logger();
logger();
logger();


function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}


fruitProcessor(5, 6);

const applejuice = fruitProcessor(5, 6);
console.log(applejuice);


const appleOrangeJuice = fruitProcessor(2,3);
console.log(appleOrangeJuice);




// Function Declaration 

function calcAge1(birthYear){
   return 2043 - birthYear;
}

const age1 = calcAge1(1991);



// Function Expression

const calcAge2 = function (birthyear){
  return 2043 - birthyear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function

const calcAge3 = birthyear => 2043 - birthyear;

console.log(calcAge3(1991));



const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2043 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

yearsUntilRetirement(1991);

console.log(yearsUntilRetirement(1991, 'Madhusudhan'));





function cutFruitPieces(fruit){
  return fruit*4;
}

function fruitProcessor2(apples, oranges){

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}


console.log(fruitProcessor2(2, 3));

const calcAge = function (birthYear){

  return 2043 - birthYear;
}



const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
     return `${firstName} retires in ${retirement} years`;
  }else return `${firstName} is already retired.`
}


console.log(yearsUntilRetirement2(1975, 'Shwetha'));



const calcAverage = (score1,score2,score3) => {
  return (score1 + score2 + score3) / 3;
}


const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65,54,49);

function checkWinner(avgDolphins, avgKoalas){
  if(avgDolphins >= 2*avgKoalas){
    console.log(`Dolphins win (${avgDolphins} vd. ${avgKoalas})`)
  }else if (avgKoalas >= 2*avgDolphins){
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }else {
    console.log('No team wins...')
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS

const friends = ['hema', 'bhanu', 'prema'];

console.log(friends);



const years = new Array(2000, 2001, 2002, 2003, 2004);

console.log(years[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = 'ray';

console.log(friends[2]);
console.log(friends);