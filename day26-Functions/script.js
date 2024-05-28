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

//console.log(isPrivate);//output - error: isPrivate not defined.
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



// Example-1

let f;



const h = function(){
    const b = 777;
    f = function(){
        console.log(b*2);
    }
}

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

g();
f();

// Reassigning f

h();
f();


// Example-2 Timer

const boardPassengers = function(n, wait){
    const perGroup = Math.floor(n / 3);

    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(100, 3);