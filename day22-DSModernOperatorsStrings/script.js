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

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'sUcHi';
const passengerLower = passenger.toLocaleLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing emails

const email = 'heya@jupiter.io';
const loginEmail = ' Heya@juPiter.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23! ';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

const announcement2 =
  'All passengers come to boarding door 23, Boarding door 23! ';
// Regular expression to replace the character or word at all places in the string.
console.log(announcement.replace(/door/g, 'gate'));

// String Methods that return Booleans

const plane2 = 'Airbus320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));

console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('This plane is a part of the NEW Airbus family');
}

//practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Get some snacks and a gun for protection');

//.split() method

console.log('a+very+nice+string'.split('+'));
console.log('Suchitha Ramachandrapurapu'.split(' '));

const [firstName, lastName] = 'Suchitha Ramachandrapurapu'.split(' ');

console.log(firstName);
console.log(lastName);

// .join() method
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

// Practice Application - creating a function to capitalize names

//mysolution
const capitalizeName = function (name) {
  const newArray = [];
  const lowerCase = name.toLowerCase();
  const array = lowerCase.split(' ');
  for (let i of array) {
    const z = i.replace(i[0], i[0].toUpperCase());
    newArray.push(z);
  }

  console.log(newArray.join(' '));
};

capitalizeName('suchitha ramachandrapurapu');

capitalizeName('rama lakshmana bharatha shatrugna');

// Jonas Solution

const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('likhitha ramachandrapurapu');

capitalizeName('dharma arjuna bheema nakula sahadeva');
