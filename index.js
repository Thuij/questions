//PART TWO: IMPLEMENTATION EXERCISE.
let fullName = "Thuku Maina";
const age = 25;
var enrolled = true;
console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(enrolled, typeof enrolled);

let numericString = "5";
let number = 10;

let additionResult = numericString + number;
let multiplicationResult = numericString * number;
console.log(additionResult);      // "510"
console.log(typeof additionResult); // string
console.log(multiplicationResult);      // 50
console.log(typeof multiplicationResult); // number

letage = 30;
if (age < 5) {
    console.log("Free admission");
} else if (age >= 5 && age <= 17) {
    console.log("Child discount");
} else if (age >= 18 && age <= 64) {
    console.log("Full price");
} else {
    console.log("Senior discount");
}

let accountBalance = -25;
let accountStatus = accountBalance < 0
    ? "Account Overdrawn"
    : "Account Active";
console.log(accountStatus);

let score = 87;
// Arithmetic operation
let adjustedScore = score + 0;
// Convert the score into a grade range
let gradeRange = Math.floor(adjustedScore / 10);
let grade;
switch (gradeRange) {
    case 10:
    case 9:
        grade = "A";
        break;

    case 8:
        grade = "B";
        break;

    case 7:
        grade = "C";
        break;

    case 6:
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log("Score:", adjustedScore);
console.log("Final Grade:", grade);
let person1 = { name: "Thuku" };
let person2 = person1;
person2.name = "Mercy";
console.log(person1.name); // Mercy

let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

//PART ONE: DISCUSSION QUESTIONS.
//Question 1.
//var is function-scoped, meaning it is accessible throughout the function in which it is declared. It can be redeclared and reassigned.
//let is block-scoped, meaning it only exists within the { } block where it is declared. It can be reassigned but not redeclared in the same scope.
//const is also block-scoped. It cannot be reassigned after its initial value is assigned.
//Although all three declarations are technically hoisted, let and const cannot be accessed before their declaration because they are in the Temporal Dead Zone (TDZ). var, by contrast, is initialized to undefined when hoisted.

//Question 2.
//A primitive data type is a basic, built-in building block in a programming language that stores a single, simple value directly in memory
//Primitive values are fundamentally different from reference types, such as objects and arrays. A primitive variable directly holds its value, while an object or array variable holds a reference to an object in memory.
//avaScript has seven primitive data types, such as string, number, boolean, bigint, undefined, null and symbol.

//Question 3.
//== (loose equality) compares values after allowing JavaScript to perform type coercion.
//=== (strict equality) compares both the value and the data type without performing the usual implicit type conversion.

//Question 4.
//The main JavaScript logical operators are:
//&& — logical AND
//|| — logical OR
//! — logical NOT
//If your question's --- was intended to represent the NOT operator, the correct JavaScript operator is !.
//&& (AND) evaluates to the first falsy value it encounters, or the last value if all values are truthy.
//|| (OR) evaluates to the first truthy value it encounters, or the last value if none is truthy.
//! (NOT) reverses the truthiness of a value:
//Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the final result is already known.

//Question 5.
//A switch statement is useful when you need to compare one expression against several possible values. It can make code easier to read than a long sequence of if...else if statements.
//Each case represents a possible value. 
// The break statement stops execution from continuing into the next case.
//The default block is optional and runs when none of the specified cases matches the expression.
//In general, switch is particularly useful when checking one value against many specific possibilities, while if...else is often more suitable for ranges or complex conditions.
