# Data Structures, Modern Operators and Strings

Log - 20-05-24

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
- [x] Coding Challenge #3
- [ ] Working with Strings
- [ ] String Methods Practice

---

## Working with Strings

**String Methods:**

1. **.length** - gives the length of a string.

2. **.indexOf()** - gives the index of the first occurence of the character or word.

3. **.lastIndexOf()** - gives the index of last occurence of the character or word.

4. Indexes are useful to extract a piece of a string using the slice method.

5. while using the **.slice(beginningindex, endingindex)** method, the extraction begins and ends at the index given in as the argument, but it does not include the charcter at the ending index. (Just like arrays, strings also start with the index 0).

6. If we dont specify the ending index .slice() method will output the remaining string.

7. when a negative index is passed, then it outputs from the string backwards, it starts from -1.

8. Except the .length, .indexOf() method all the string methods return a string, which we will have to store in a variable or a Data Structure.

9. **.toLowerCase()** - converts the stirng to lower case

10. **.toUpperCase()** - converts te string to uppercase.

11. **.trim()** - removes spaces. **.trimStart()** removes space from the starting, **.trimEnd()** removes space from the end of a string.

12. **.replace(chararcter/wordinString, ch/wordWeWantToReplace)** - replaces character or word from string. But just like how we can find the occurence of character or word, similarly only the first occurence of the character or the word gets replaced.

13. **.ReplaceAll(i,j)** replaces the characters or words at all the places.

14. **.includes()** returns a boolean by checking if the character or the word existd in the string.

15. **.startsWith()** returns boolean by checking if the string starts with the given character or word.

16. **.endsWith()** returns boolean by checking if the string ends with the given character or word.

17. **.split()** allows us to divide a string into multiple parts based on a divider string. Then the elements will be stored in an array, so basically an array is returned.

```js
console.log('a+very+nice+string'.split('+'));
```

18. **.joint()** method is the opposite method of **.split()**, we can join array of strings with a divider string.

**Behind the Scenes**

Since the strings are primitive values they should not be having methods.

What really happens behind the scenes is that whenever we call methods, Javascript converts the string primitive to string object. And upon that objects the methods are called.

**Note:** It is recommended that the user input string be converted into lower case and then other methods be performed on it.
