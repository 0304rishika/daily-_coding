//1.In JavaScript, how many data types are there?
//ans) 8 types of datatypes


//2.What kind of numbers are represented by the number type in JavaScript?
//ans) we represent integers numbers

//3.what is the limitation of the numberWhat data type?
//ans)

//4.How is a BigInt instantiated (created) in JavaScript?
//ans)let a=123456789234n;
  // console.log(a)

//5.Which are the three types of quotes that can be used to create a string representation of a value in JavaScript?
//ans)1. Double quotes
//    2. Single quotes

//6.What is the difference between double, single, and backtick quotes?
//ans)1. Double quotes: "Hello"
//    2. Single quotes: 'World'

//7.What are the two possible values of the Boolean data type?
//ans)true
//    false


//8.What does the NULL data type represent in JavaScript?
//ans) let a = " "

//9.What does the undefined data type represent in JavaScript?
//ans)let a;
//    console.log(a); 

//10.What is the difference between typeof x and typeof(x) with parentheses?
//ans)no difference

//11.What does the typeof operator return?
//ans)

//12.What are the primitive data types in JavaScript?
//ans)1. Number 2. BigInt 3. String 4. Boolean 
//    5. Null 6. Undefined 7. Symbol


//13.What is the difference between null and undefined in JavaScript?
//ans)let a = null;         // null
//    let b;                // Default is undefined



//14.What is NaN in JavaScript?
//ans)

//15.What is a BigInt in JavaScript?
//ans)BigInt is numeric data type that can represent integers  number type (234567n).


//16.What is the difference between a primitive data type and an object data type in JavaScript?
//ans)primitive data types: stored directly by value
//    object data types: stored by reference, and can have properties and methods. 
//                       Examples: Array, Function, Object.


//1.Write a program to check if a number is a primitive type or not.
//ans)
let a = 42;
if (typeof a == "number")
   {
  console.log("The value is a primitive number.");
} 
else {
  console.log("The value is not a primitive number.");
}

//2.Declare a variable with a string value and print its type using typeof.
//ans)
let b = "Hello, World!";
console.log(typeof b); 



//3.Write a program to add two numbers and print their result.
//let num1 = 5;
//let num2 = 10;
//ans)
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("sum is:", sum);



//4.Write a program to convert a string to a number and add 10 to it.
//let str = "20";
//ans)

//5.Create a program to check if a variable is undefined or not.
//ans)
let value;
if (typeof value === "undefined") {
    console.log("The variable is undefined.");
} else {
    console.log("The variable is defined.");
}

//6.Write a program to compare null and undefined using == and ===. Explain the output.
//ans)
let x = null;
let y = undefined;

console.log(x == y);  
console.log(x === y); 

//7.Create a program to check if a given value is a BigInt.
//ans)
let z = 123456789012345678901234567890n;
if (typeof z === "bigint") 
  {
    console.log("The value is a BigInt.");
} else 
{
    console.log("The value is not a BigInt.");
}

//8.let num = 123456789012345678901234567890n;
//ans)
let c = 123456789012345678901234567890n;
console.log("num is:", c);

//9.Write a program to find the length of a string.
//let name = "JavaScript";
//ans)
let d = "JavaScript";
console.log(" length of a string is:",d);

//10.Write a program to check if a variable is a Boolean.
//let isAvailable = true;
//ans)
let isAvailable = true;
if (typeof isAvailabe == "boolean") {
    console.log("The variable is a Boolean.");
} else 
{
    console.log("The variable is not a Boolean.");
}

//11.Write a program to create a Symbol and log its type.
//ans)
let s = Symbol;
console.log(typeof s);
