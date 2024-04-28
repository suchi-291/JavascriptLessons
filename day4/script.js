let markWeight = prompt("please enter the mark's weight: ");
let markHeight = prompt("please enter the mark's height: ");
let johnWeight = prompt("please enter the john's weight: ");
let johnHeight = prompt("please enter the john's height: ");
let johnBmiv1;//95,1.88, 85 1.76
let markBmiv1, markBmiv2, johnBmiv2, markHigherBMIv1,markHigherBMIv2;
//78,1.69 92 1.95


markBmiv1 = markWeight / markHeight ** 2;
markBmiv2 = markWeight / (markHeight * markHeight);
johnBmiv1 = johnWeight / johnHeight ** 2;
johnBmiv2 = johnWeight / (johnHeight * johnHeight);

markHigherBMIv1 = markBmiv1 > johnBmiv1;
markHigherBMIv2 = markBmiv2 > johnBmiv2;

document.write("<h1>Javascript exercise on operator precedence<h1>");
document.write("<p> marks weight: " + markWeight + "</p>");
document.write("<p> marks weight: " + markHeight + "</p>");
document.write("<p> marks weight: " + johnWeight + "</p>");
document.write("<p> marks weight: " + johnHeight + "</p>");
document.write("<p>The value of mark's BMI: " + markBmiv1);
document.write("<p>The value of mark's BMI: " + markBmiv2);
document.write("<p>The value of john's BMI: " + johnBmiv1);
document.write("<p>The value of john's BMI: " + johnBmiv2);
document.write("<p> Boolean result1: </p>" + markHigherBMIv1);
document.write("<p> Boolean result2: </p>" + markHigherBMIv2);
console.log(markBmiv1);
console.log(markBmiv2);
console.log(johnBmiv1);
console.log(johnBmiv2);
console.log(markHigherBMIv1);
console.log(markHigherBMIv2);


