// Day 1: Variables and Data Types

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var score = 77;
console.log(score);
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name = "hxnCodes";
console.log(name);

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const darkMode = true;
console.log(darkMode);

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num = 77;
console.log(typeof num);
let str = "hxncodes";
console.log(typeof str);
let bool = false;
console.log(typeof bool);
let obj = { name: "hxn", age: 35 };
console.log(typeof obj);
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let task5 = "some value";
console.log("initial Value: ", task5);
task5 = "changed value";
console.log("Re-Assigned Value: ", task5);

// Task 6: Try reassigning a variable declared with const and observe the error.
const pi = 3.14;
// pi = 3.141414; TypeError: Assignment to constant variable.

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
console.log("num:", num, ", type:", typeof num);
console.log("str:", str, ", type:", typeof str);
console.log("bool:", bool, ", type:", typeof bool);
console.log("obj:", obj, ", type:", typeof obj);
console.log("arr:", arr, ", type:", typeof arr);

//Reassigning to const is not possible.
