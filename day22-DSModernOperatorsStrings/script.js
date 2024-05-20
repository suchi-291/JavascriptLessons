'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length); //.length
console.log('Suchi'.length);

console.log(airline.indexOf('r')); //.indexOf
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));

console.log(airline.slice(1, -1));

// Check if middle seat or not

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😅');
  else console.log('Luck you! Enjoy your Ride 😎');
};
// B and E are middle seats

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
