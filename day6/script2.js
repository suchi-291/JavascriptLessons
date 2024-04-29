const day = "thursday";

switch(day){
  case "monday" :
    console.log('Plan Course structue');
    console.log('Go to Coding meetup');
    //break;

  case "tuesday" :
    console.log("Prepare theory videos");
    //break;

  case "wednesday" :
  case "thursday" :
    console.log("write code examples");
    //break;
  case "friday" : 
    console.log("Record videos");
    break;
  case "saturday" :
  case "sunday" :
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("not a valid day");

}


if(day == 'monday'){
  console.log('Plan Course structue');
  console.log('Go to Coding meetup');
}else if(day == 'tuesday'){
  console.log("Prepare theory videos");
}else if(day == "wednesday" || day=="thursday"){
  console.log("write code examples"); 
  
}else if(day == "friday"){
  console.log("Record videos");
}else if(day == "saturday" || day == "sunday"){

  console.log("Enjoy the weekend :D");
  
}else{
  console.log("Not a valid day!");
}




const age = 23;
age >= 18 ? console.log('I can Drive a car!') : console.log("I am not allowed to drive");

const canshevote = age>=18 ? 'allowed to vote' : 'not allowd to vote';

console.log(canshevote);