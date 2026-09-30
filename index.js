let fullName = "John Doe";
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
let person1 = { name: "John" };
let person2 = person1;
person2.name = "Mary";
console.log(person1.name); // Mary

let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

