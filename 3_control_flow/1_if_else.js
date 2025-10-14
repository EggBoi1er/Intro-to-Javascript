let savingAmount = 20;
let expenses = 100;

const amIBroke = savingAmount < expenses;

if(amIBroke) {
    console.log("Watch out your expenses!");
} else {
    console.log("You're good to go!");
}

let grade = 70;

if(grade >= 90) {
    console.log("A");
} else if(grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if(grade < 70) {
    console.log("You fail");
}