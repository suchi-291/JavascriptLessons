const myArray = [
  'Suchitha',
  'Ramachandrapurapu',
  2024 - 2000,
  'Front-end Developer',
  ['Bhavana','Hema','Sandeep','Janu']
];

const myObject = {
  firstName: 'Suchtiha',
  lastName: 'Ramachandrapurapu',
  age: 2024 - 2000,
  Occupation: 'Front-end Developer',
  friends: ['Bhavana', 'Hema', 'Sandeep', 'Janu']
};

console.log(myArray);
console.log(myObject);

console.log(myObject.lastName);
console.log(myObject['lastName']);


const nameKey = 'Name';

console.log(myObject['first' + nameKey]);
console.log(myObject['last' + nameKey]);

/*const interestedIn = prompt('What do you want to know about Suchitha choose from the following: firstName, lastName, age, occupation, friends ');*/



/*console.log(myObject.interestedIn);

if(myObject[interestedIn]){

  console.log(myObject[interestedIn]);
} else {
  console.log('Wrong request! Please choose among firstName, lastName, age, occupation, friends');
}*/


myObject.location = 'Vijayawada';
myObject['mailID'] = 'suryasuchitha@gmail.com';

console.log(myObject);

//"Suchitha has 4 friends, and her bestfriend is Bhavana"

console.log(`${myObject.firstName} haages ${myObject.friends.length} friends, and her bestfriend is ${myObject.friends[0]} ` );

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  /*calcAge: function (){
    this.age = 2037 - this.birthYear;
    return this.age;
  }*/
  /*calcAge: function(birthYear){
    return 2037 - birthYear;
  }*/

  /*calcAge : function (){
    console.log(this);
    return 2037 - this.birthYear;
  }*/

  calcAge: function(){
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary : function(){
      
    /*if(this.hasDriversLicense){*/

      return (`${this.firstName} is a ${this.age} old ${this.job} that has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);

           
      /*}else{
      
        return (`${this.firstName} is a ${this.age} years old ${this.job} that does not have a driver's license.`);
        
  }*/
  
}
}

//console.log(jonas.calcAge(jonas.birthYear));

//console.log(jonas['calcAge'](1993));

console.log(jonas);
/*console.log(jonas.age);*/
console.log(jonas.calcAge());
console.log(jonas.age);

/*console.log(jonas.calcAge());*/

console.log(jonas.getSummary());


/* Write your code below. Good luck! 🙂 */
const mark = {
  fullName : 'Mark Miller',
  mass : 78,
  height: 1.69,
  calcBMI : function(){
      this.bmi = (this.mass/(this.height * this.height));
      return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI : function(){
      this.bmi = (this.mass/(this.height * this.height));
      return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
if(mark.bmi > john.bmi){
  console.log(`Mark Miller's BMI (${Number(mark.bmi)}) is higher than John Smith's BMI (${Number(john.bmi)})!`);
  }else {
      console.log(`John Smith's BMI (${Number(john.bmi)}) is higher than Mark Miller's BMI (${Number(mark.bmi)})!`);
  } 


/*console.log('Lifting weights repition 1');
console.log('Lifting weights repition 2');
console.log('Lifting weights repition 3');
console.log('Lifting weights repition 4');
console.log('Lifting weights repition 5');
console.log('Lifting weights repition 6');
console.log('Lifting weights repition 7');
console.log('Lifting weights repition 8');
console.log('Lifting weights repition 9');
console.log('Lifting weights repition 10');*/

for(let rep = 1; rep<=10 ; rep++){
  console.log(`Lifting weights repition ${rep}`);
}

const myArray3 = new Array('Suchitha','Ramachandrapurapu',2024-2000,'Front-end Developer',['Bhavana', 'Hema', 'Sandeep']);

const types = [];

for (let i = 0; i< myArray3.length; i++){
  
  console.log(myArray3[i], typeof(myArray3[i]));

  /*types[i] = typeof(myArray3[i]);*/

    types.push(typeof(myArray3[i]));  
}


console.log(types);

const years = [1998, 2000, 2002, 2004];

const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push( 2037 - years[i]);
}

console.log(ages);


const jonasBro = [
  'Jonas',
  'Schmedtmann',
  46,
  'teacher',
  ['micahel', 'Owen', 'Steve']
];

console.log('USE CASE CONTINUE')

for(let i=0 ; i < jonasBro.length; i++){
  if(typeof(jonasBro[i]) !== 'string') continue;
  console.log(jonasBro[i]);
}


console.log('USE CASE BREAK')

for(let i = 0; i < jonasBro.length; i++ ){
  if(typeof(jonasBro[i]) === 'number') break;
  console.log(jonasBro[i]);
}


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i=0; i < bills.length; i++){
    
    for(let j = 0; j < bills.length; j++){
        tips[j] = calcTip(bills[j]);
    }
    totals[i] = bills[i] + tips[i];
}

const calcAverage = function (arr){
    
  let sum = 0;
  
  for(let i = 0; i < arr.length ; i++){
      sum = sum + arr[i];
  }
  
  const avg = sum/arr.length;
  
  return avg;
  
  
}
console.log(totals);
console.log(calcAverage(totals));




