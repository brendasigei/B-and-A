//part 1 ;control flow

//theoritical mastery

//1. truthy and falsey aka true or false
false = 0
false = ""
false = null
false = undefined
false = NaN

true = "hello"
true = 25

//2 short-circuit logic
let name = "Brenda"

console.log(username && "welcome" + username);
//&& means both conditions must be true

let username ="";

let disolayName = username || "Guest";
// || means at least one value needs to be true and if the first one is false use the other one 

console.log(displayName);

//3. strict equality operator
//recommended to use === over == because === checks bot values and data 

let age ="67";

if (age === 67) {
    console.log("you are 67");
} else {
    console.log("The types are different");
}
//technical applications

//4 condition analysis
const x ="5"
const y = 5;

if (x == y && typeof x === "string") {
    console.log("Result A");
} else if (x === y || x > 0){
     console.log("Result B");
} else {
    console.log("Result C");
}

//5 executes and justifies
console.log("Result A");
//if block executes

//else{}it justifies

//6.Nested logic trasformation

//original nested if else
  let Age = 20;

if (Age >= 18) {
    if (Age >= 65) {
        console.log("Senior");
    } else {
        console.log("Adult");
    }
} else {
    console.log("Minor");
}  

//ternary
let aGe = 20;

let category = aGe >= 18
    ? (aGe >= 65 ? "Senior" : "Adult")
    : "Minor";

console.log(category);

//switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("work");
        break;

    case "Friday":
        console.log("party");
        break;

    case "Saturday":
    case "Sunday":
        console.log("party");
        break;

    default:
        console.log("sad");
}

//part2 iliteration for and while loops

// theoritical mastery

//6 the loop lifecycle

/*for loop has 3 expressions initialization, conditions, final expression*/
//initialization
let i =1
//condition
false
true
//final expression
i++

//7termination hazards
let number =1;

while (number <= 5) {
    console.log(number);
    number++;
    //each time the loop runs no increases but when it reaches 6 loop stops
}

//8 break vs continue

//break stops loops
for (let i = 1; i <= 23; i ++) {

    if (i === 20){
        continue;
    }
    console.log(i);
}
//technical application

//9 array traversal
let numbers = [1, 2, 3, 4, -5, 6, 7];

for (let i = 0; i < numbers.length; i++) {

    // Stop if the number is negative
    if (numbers[i] < 0) {
        break;
    }

    // Skip even numbers
    if (numbers[i] % 2 === 0) {
        continue;
    }

    console.log(numbers[i]);
}


//10 code tracing 
let count = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > i; j--) {
        count++;
    }
}

//11 final count is 6

//12 while vs do while eg

let Number = 10;

// while loop checks the condion before running
while (number < 5) {
    console.log("While loop: " + Number);
}

// do...while loop runs the code first then checks condition
do {
    console.log("Do-while loop: " + number);
} while (number < 5);

// part 3 functions

//12. declaration vs expression

/*a fuction declaration is fully hoisted with its definition, meaning it can be caled anywhere in its scope*/
/*a function expression is assigned to a varible and cannot be called before the intrepreter reaches */

//13. parameters and rest/spread
//arguments object
function addNumbers() {
    console.log(arguments);
}

addNumbers(10, 20, 30);

//14. return statement
function greet() {
    console.log("Hello");
    return;
    console.log("Goodbye");
}

let result = greet();
console.log(result);

//technical application

//15. arrow function anatomy
function multiply(a, b) {
    return a * b;
}

//converted to
const multiply = (a, b) => a * b;

//16. higher-order concepts
function A() {
    console.log("Hello!");
}

function B(callback) {
    callback();
}

B(A);

//part4 scopes and variable lifetime

//theoretical mastery

//17 global vs local
/*The Global Object contains values and functions that are accessible globally. 
Polluting the global scope with many variables can cause naming conflicts, unexpected changes, and make code harder to debug and maintain. 
Therefore, variables should generally be kept in local or appropriately scoped contexts.*/

//18.block scope vs function scope

//var = function scope
function example() {
    if (true) {
        var name = "Angel";
    }

    console.log(name); // Angel
}

//let and const = block scope
if (true) {
    let age = 20;
    const name = "Angel";

    console.log(age);  // 20
    console.log(name); // Angel
}

console.log(age);  // Error
console.log(username); // Error


//shadowing

//when inner-scope variable hides an outer on of the same name
let Name = "global"

function greet() {
    let name = "local";
    //shadows the global 'name'
    console.log(name);
    // "local"
}
greet();
console.log(username);
// "global" (unchanged)

//block-scope shadowing

let x = 1;
{
  let x = 2;        // shadows outer x only inside this block
  console.log(x);   // 2
}
console.log(x);     // 1

//gotchas

let value = 10;
function test() {
  console.log(value); // ReferenceError! The inner `value` is in the TDZ
  let value = 20;
}

//tecnical application
//scope tracing:
console.log(a+b);
    if (true) {
        let a = 30
        let a = 10
        let b = 20
}

console.log(a);
//prints 10

console.log(c);
//prints 40
//it would throw a reference error because c is not defined in the global scope 


//predicted outputs
console.log(a+b) (30+20)
//prints 50

console.log(a);
//prints 10

console.log(c);
//prints 40


//temparamental dead Zone
//span of time from the start of the scope until the let or const declaration is evaluated
console.log(x); 
// undefined
var x = 5

console.log(y); 
// ReferenceError: Cannot access 'y' before initialization
let y = 5;

{
  // TDZ for `z` starts here
  console.log(z);  
  // ReferenceError
  let z = 10;     
   // TDZ ends here; z is initialized
  console.log(z); 
   // 10
}

function show() {
  console.log(val); 
    // fine, because this runs after `val` is initialized
}
let val = 1;
show();           
    // 1

let a = 10;
{
  console.log(a); 
  // ReferenceError, not 10
  let a = 20;
}



