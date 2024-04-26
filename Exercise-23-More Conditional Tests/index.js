"use strict";
// QUESTION 24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Equality and Inequality Test 
console.log("Equality test in string: ", "Apple" === "Apple");
// Equality and Inequality Test 
console.log("Inequality test in string: ", "Apple" == "orange");
// Test using the lower case function
console.log("Lower case function test: ", "Hello".toLowerCase() === "hello");
// Numerical tests involving equality and inequality
console.log("Equality test in string: ", 26 === 26);
// Numerical tests involving equality and inequality
console.log("Inequality test in string: ", 26 != 26);
// greater than and less than
console.log("Greater than test", 10 > 5);
// greater than and less than
console.log("Greater than test", 10 < 5);
// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// and less than or equal to
console.log("and less than or equal to test", 10 <= 5);
// Tests using "and" and "or" operators
console.log("Tests using && operator", 5 === 5 && 10 > 5);
// Test using || operator
console.log("Test using || operator", 5 === 5 || 5 > 10);
// Test whether an item is in a array
let fruits1 = ["apple", "banana", "orange"];
console.log("test apple in the array", fruits1.includes("banana"));
// Test whether an item is not in a array
let fruits2 = ["apple", "banana", "orange"];
console.log("test apple in the array", fruits2.includes("kiwi"));
