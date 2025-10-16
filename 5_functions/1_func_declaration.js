// function declarations
// function nameofFunction
function saySomething(name="CSS") {
    return `I love ${name}`;
}

console.log(saySomething("HTML"));
console.log(saySomething());


// function expressions
// using a variable to call the function
const total = function calculate(num1, num2) {
    return num1 + num2;
}

console.log(total(10, 40));
