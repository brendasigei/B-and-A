let fullName =(`brenda sigei`);
let age = 20;
//it is limited by block scope
var isMarried = false;
//it is isn't limited by block scope
If false {
    var isMarried = true;
}
//if declared with var, it will be true
const notmarried='notmarried"
if (true){
    const notmarried=true;
}
//its value cannot be changed and also used to declare a constant variable

// data types =number, string, boolean, null, undefined, object, symbol

//primitive data types 
let primarycolor = "pink";
let secondarycolor = //creat a branch new slot = primarycolor;
//copies the value of primarycolor into secondarycolor";
secondarycolor = "black";

console.log(primarycolor); // logs:'red" (unchanged)
console.log(secondarycolor); // logs: 'black' (changed)

//reference data types
let originalcart = [item ="banana", price=20, ];
//this is an array

let sharedcart = originalcart;
sharedcart.push(item="orange", price=30)

console.log(originalcart); // logs: [ "orange", "banana"] (affected)


//loose quality(==)
//it covers string to a number
//it converts boolean to number
//it converts the object into a primitive string


//strict equality(==)
//forces you to explicity convert data types


5=="5" // true (the string "5" is correct into the number 5)
5==="5" //false (the value match but the number is not equal to the string)

1==true //true (the boolean true is coerced into the number 1)
1===true // false (number is not equal to boolean)

//logical oparators (&&, ||, ---) evaluate expressions from left to right

//short-circut evaluation it means js will stop executing and evaluating

//the logical and oparator (&&)
const results = true && 0 && "hello";
//short-circuits at 0 and ignores the rest
console.log(result1);//logs; 0

const result2 ="apple" && "banana" && "orange";
//No falsy values found, so it returns the truthy value
console.log(result); //logs; orange

//logic and operator (||) searches for truly value and returns to very last value
const result3 = "welcome" || false || 5;
//short-circuits at welcome

const result4 = false || null || 0;
//no truly values found thus returns the last value
console.log(results4);//logs 0

//if...else if
let role = "editor";

if(role ==="admin":{
    console.log("full access");
} else if (role ==="editor") {
    console.log("can publish content");
} else if (role ==="guest") {
    console.log("read-only access");{
        else{
            console.log("Access denied");
        }
    
        //switch it evaluates the expressions once and jumps directly to the matching case
        let work = "manager";

        switch (work) {
            case "admin":
                console.log("full access")
                break;
                case "editor":
                    console.log("can publish content")
                    break;
                    case "guest":
                        console.log("read-only access")
                        break;
                        default:
                            console.log("access denied")
        }




