const firstName = 'Suchitha';
const job = 'Designer';
const birthYear = 2000;
const year = 2024;


const Suchitha = "I'm " + firstName + ', a ' + (year - birthYear) + " years Old " + job + "!"; 

document.write(Suchitha);

const Suchithanew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

document.write('<br>' + Suchithanew);
document.write(`<br> This is a template string <br>
I want to get used to them`);

const age = 16;
const isOldEnough = age>= 18;
const yearsLeft = 18 - age;

document.write('<br>' + isOldEnough);
console.log(isOldEnough);


if (isOldEnough){
  document.write(`<br> Sarah can start Driving 👍`);
} else {
  document.write(`<br> No Sarah has ${yearsLeft} more to start Driving `)
}

