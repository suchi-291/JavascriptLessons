console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('John'));
console.log(Boolean({}));


const money = 0;
if (money){

  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}


let height;
if(height){
  console.log("Yay! the variable height is declared");
}else{
  console.log("height is UNDEFINED");
}

let hheight = 123;
if(hheight){
  console.log("Yay! the variable height is declared");
}else{
  console.log("height is UNDEFINED");
}

let hhheight = 0;
if(hhheight){
  console.log("Yay! the variable height is declared");
}else{
  console.log("height is UNDEFINED");
}



const myAge = 18;
if(myAge === 18) console.log('You just became an adult');

console.log('2' == 2);
console.log('2' === 2);


/*const favourite = Number(prompt("What's your favourite number"));*/
const favourite = 23;
console.log(favourite);

if (favourite == 23){
  console.log("Cool! 23 is an amazing number!")
}else if (favourite === 7){
  console.log("7 is also a cool number");}
  else if (favourite === 9){
    console.log("9 is also a cool number");
}else{
  console.log("Number is not 23 or 7 or 9");
}


if(favourite !== 23){
  console.log("why not 23?");
}


const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision );
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);

let doesShehavelicense = prompt("Does she have license?");
let license;
let vision;
let tired;
if (doesShehavelicense === "yes"){
  let license = true;
 
} else if (doesShehavelicense ==='no'){
  let license = false;
  
}

let doesShehavegoodvision = prompt("Does she have good vision?");
if (doesShehavegoodvision === "yes"){
  let vision = true;
  
} else if (doesShehavegoodvision === "no"){
  let vision = false;
  
}


let isSheTired = prompt("Is she tired?");
if (isSheTired === "yes"){
  let tired = true;
 
} else if (isSheTired ==='no'){
  let tired = false;
  
}

const shouldDrive = license && vision && !tired;

if(shouldDrive){
  console.log("She can Drive!");
}else{
  console.log("She is not permitted to drive!");
}

//Coding Challenge 3

/* Write your code below. Good luck! 🙂 */
const dolphinRound1 = 96;
const dolphinRound2 = 108;
const dolphinRound3 = 89;

const koalaRound1 = 88;
const koalaRound2 = 91;
const koalaRound3 = 110;

let scoreDolphins = ((dolphinRound1 + dolphinRound2 + dolphinRound3) / 3);
let scoreKoalas = ((koalaRound1 + koalaRound2 + koalaRound3)/3);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}else {
    console.log("Both win the trophy");
}
