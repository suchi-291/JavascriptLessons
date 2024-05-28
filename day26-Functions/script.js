const runOnce = function(){
    console.log("This will never run again");
}


runOnce();

// Now we can call as many times as we can, but if we want the function to only get called once, then we should use Immediately Invoked Function expression(IIFE)

//IIFE

(function(){
    console.log("This will not be outputted again");
})();

// The above of pattern of calling a function by tricking to run function expression to as statement is the Immediately Invoked Function Expression (IIFE) 

(() => console.log("This also shall be outputted only once"))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(isPrivate);//output - error: isPrivate not defined.
console.log(notPrivate);


// Closures

const secureBooking = function(){
    let passengerCount = 0; //The plan is We don't want the passenger count here to be manipulated from outside

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }

}


const booker = secureBooking();

