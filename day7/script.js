const age = 19;
console.log(`I like to drink ${age>=18? 'Wine' : 'water' }`);

const bill = 275;

/* Write your code below. Good luck! 🙂 */
let tip;

tip = bill>50 && bill<300? bill*0.15 : bill*0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
