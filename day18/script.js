"use strict";

//REST OPERATOR

// Rest operator syntactically looks same as that of the spread operator, the difference is spread operator is used to unpack all the elements from an array, rest operator is used to pack all the elements into an array

//Spread Operator - Dissociates an Array into individual elements

//Rest Operator - Collects all the elements and condenses into an array

// USECASE - 1 - REST OPERATORS IN DESTRUCTURING ARRAYS AND OBJECTS

const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...myArray] = [1, 2, 4, 5, 8, 20];
console.log(a, b, myArray);

// SPREAD operator is always used on the right side of assignment operator
// REST operator is always used on the left side of assignment operator

//REST operator should always be used last while using destructuring assignment

//REST Operator on Objects

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risoto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //24 hours open
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// USECASE - 2 - REST OPERATOR IN FUNCTION

const add = function (...args) {
  console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum = sum + args[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 4, 3];
add(...x);

restaurant.orderPizza("chicken", "mushrooms", "olives", "paneer");

restaurant.orderPizza("onions");

//  SHORT CIRCUITING (&& ||)

// || OPERATOR
console.log(3 || "Joe");

// In the case of OR Operator Short-Circuiting means, if the first operand is a "Truthy" value, then JS will stop till there and returns the Truthy value, which in the above case is 3.

console.log("" || "Joe");

//In this case the first operand is one of the five "Falsy" values in Javascript, so the 2nd Operand "Joe" got logged on to the console.

console.log(true || 0);
console.log(undefined || null);

// Here since the first operand is false, the 2nd operand is returned

console.log(undefined || 0 || "" || "Hello" || 23 || null);

//The first true value will get logged onto console

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// && OPERATOR

console.log(0 && "Jonas");
console.log(7 && "Jonas");

//For && operator it is the reverse of what happens in OR case, Check is done for Falsy value, if the first operand is a falsy value, it gets logged on to the console, when both the operands are truthy the last truthy value will get logged on to the console.

console.log("Hello" && 23 && null && "Jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "onions");

//NULLISH COALESCING OPERATOR

//restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// NULLISH - null and undefined (Not 0 or '')

restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect);

// PRACTICE ASSIGNMENTS

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//const [firstBook, secondBook, ...restBooks] = books;

//const bookAuthors = [firstBook.author, secondBook.author];

const bookAuthors = [...books[0].author, ...books[1].author];

console.log(bookAuthors);

const spellWord = function (word) {
  console.log(...word);
};

spellWord("JavaScript");

const [mainKeyword, ...rest] = books[0].keywords;
console.log(rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

console.log(bookPublisher);
console.log(restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`"The book "${title}" has ${authors.length} authors".`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

const hasExamplesInJava = function (book) {
  console.log(book.programmingLanguage === "Java" || "no data available");
};

hasExamplesInJava(books[0]);
hasExamplesInJava(books[1]);

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}
