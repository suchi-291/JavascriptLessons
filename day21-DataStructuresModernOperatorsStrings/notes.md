# Data Structures, Modern Operators and Strings

Log - 19-05-24

- [x] Logical Assignment Operators
- [x] Coding Challenge #1
- [x] Looping Arrays: The for-of Loop
- [x] Enhanced Object Literals
- [x] Optional Chaining (?.)
- [x] Looping Objects: Object Keys, Values, and Entries
- [x] Coding Challenge #2
- [x] Sets
- [x] Maps: Fundamentals
- [x] Maps: Iteration
- [x] Which Data Structure to use when
- [ ] Coding Challenge #3
- [ ] Working with Strings
- [ ] String Methods Practice

---

## Sets

Up untill ES6 Javascript had only two kinds of Data Structures - Arrays, Objects

After ES6, Two more new data structures Sets and Maps were introduced.

**Sets** - Collection of Unique Values
To create a new set, we need to use **_new Set(<iterable>)_** with an iterable inside it.

- Sets can hold valus of mixed data types

- Major difference between set and an array is arrays can contain duplicate elements but set contains unique elements

- Set can contain values of different datatypes(multiple datatypes).

- In arrays we use .length to find out the array size, in set we use **.size** to find the size of an array.

- In array we use .includes(), to check if an element exists in the array or not. In set we use **.has**.

- We use .push,.unshift to add elements to an array, In sets we use **.add()** to add an element to set.

- To delete an element from a set we use .**delete()**.

- In a set, there are no indexes and it is also not possible to get the elements out of the set. All we mostly use sets is to find out whether an element exists in a set or not.

- **.clear()** method is used to remove all the elements out of a set.

- Since Sets also come under as iterables, we can also loop over them.

  **Note**:

- An iterable is any object that can be iterated over using 'for...of' loop.
- Iterables in Javascript - Arrays, Strings, Maps, Sets, Typed Arrays, Arguments object, NodeList and other DOM collections.

```js
const array = [1, 2, 3];
for (const item of array) {
  console.log(item); // 1, 2, 3
}

const string = 'hello';
for (const char of string) {
  console.log(char); // h, e, l, l, o
}

const map = new Map([
  ['a', 1],
  ['b', 2],
]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}

const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value); // 1, 2, 3
}

const typedArray = new Uint8Array([10, 20, 30]);
for (const value of typedArray) {
  console.log(value); // 10, 20, 30
}

function example() {
  for (const arg of arguments) {
    console.log(arg);
  }
}
example('a', 'b', 'c'); // a, b, c

const nodeList = document.querySelectorAll('div');
for (const node of nodeList) {
  console.log(node);
}
```

## Maps - Fundamentals

Map is a Data Structure that we can use to map values to keys.

Just like objects, key-value pairs are stored in Maps - but the big difference is keys in maps can be of any Data type.

- In objects 'keys' are always **Strings**, but in Maps 'Keys' can be of any Data type!

- **.set(key,value)** method in Maps is used to add new values.

- **.get()** method is used to access the values of properties.

- **.has(key)** method is used to check if a map contains a certain key. - output is boolean

- **.delete(key)** method is used to delete the key and the associated value.

- **.size** method gives the size of the map.

- **.clear()** method deletes all the properties of the map;

## Maps - Iteration

There is one more method for populating a Map, without using .set method, which is using array of arrays, inner array shall have the **key and value elements**

This structure looks same as that of the structure we get after using Object.entries method. This makes it easy to convert objects to Maps.

## WHICH DATA STRUCTURE TO USE WHEN?

### Sources of Data

1. **From the program itself:** Data written directly in the source code(Eg., Status messages that occur on the Webpage, whenever user performs an action).

2. **From the User Interface:** Data input from the user or data that is written in DOM.

3. **External Sources:** Data that is fetched from the external sources like the web API.

**_Collection of Data from any given source, needs to be stored, for that we require Data Structures_**

**For Simple List of Values** - Arrays/Sets

- Values with out any description

**If Key-Value pairs are required** - Objects/Maps

- In Objects or Maps we can describe the values

Most of the modern Data comes from Web API

The data that comes from a Web API is in **JSON** format
JSON looks like a string, but it can be easily converted in to Javascript Objects
Reason: It uses the same formatting as Javascript objects and arrays.

**Note**: A very common kind of data we work on in Javascript mostly is an array of objects.

**Other built-in DataStructures-** WeakMap and WeakSet

**Non-built-in DataStructures-** Stacks, Queues, Linked lists, Trees, Hash tables, etc

### Arrays VS Sets

| Arrays                                                                   | Sets                                                        |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| Use it when we need ordered list of values and duplicates are acceptable | Use it when we need to work with unique values              |
| Use Arrays when we need to manipulate data                               | We can use Sets when **High Performance** is very important |
|                                                                          | Sets are used to remove duplicate values from Arrays        |

### Objects VS Maps

| Objects                                                        | Maps                                             |
| -------------------------------------------------------------- | ------------------------------------------------ |
| Storing in traditional key/value pairs                         | For Better performance                           |
| Easier to write and access values with . and []                | In Maps, Keys can have an Data type              |
|                                                                | Easy to iterate                                  |
|                                                                | Easy to compute size                             |
| When we need to include functions(methods)                     | Only when we need to map key to values           |
| Objects can be used when working with JSON(can convert to map) | Use Maps when we need keys which are not strings |
