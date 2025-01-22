1.

let a = 5;
const b = 10;
var c = 15;

leta = 20; // error
constb = 25; //error
var c = 30; //error
//  output:Error


2.

letx = 10;
x = 20;
console.log(x); //20

const y = 30;
y = 40; //error

var z = 50;
z = 60;
console.log(z); // 60

3.

function example() {
  if (true) {
    var a = 5;
    let b = 10;
    const c = 15;
  }
  console.log(a); // 5
  console.log(b); // error
  console.log(c); // error
}
example();

4.

{
  var varVariable = "I'm var";
  let letVariable = "I'm let";
  const constVariable = "I'm const";
}

console.log(varVariable); // "I'm var"
console.log(letVariable); // error
console.log(constVariable); // error


5.

function test() {
     let num = 5;
     console.log(num);//5
}
test();

6.

console.log(x); // will not show any thing
{
  var x = 5;
}

console.log(y); // error
{
  let y = 10;
}




