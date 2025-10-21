const total = function calculate(num1, num2) {
    return num1 + num2;
}

// arrow functions
const sum = (num1, num2) => {
    return num1 + num2;
}
// the 2 functions above are pretty much the exact same function
console.log(sum(20, 30));

/*

ARROW FUNCTIONS

const funcName = (para1, para2) => {
    .....
    }

1. zero parameter
const funcName = () => {....}

2. one parameter (parenthesis are optional)
const funcName = (para1) => {....}
        OR
const funcName = para1 => {....}

3. two or more parameter (parenthesis are required)
const funcName = (para1, para2, para3) => {....}

4. single line block: DO NOT need {} and NO return keyword
const sum = (num1, num2) => num1 + num2;

5. multiple line block: does need the return keyword
const powerThree = num => {
    num = num * num;
        return num * num;
    }

*/

function isChristmas(){
    const today = new Date();
    return today.getMonth() === 12 && today.getDate() === 25;
}

const isChristmas2 = () => {
    const today = new Date();
    return today.getMonth() === 12 && today.getDate() === 25;
}

console.log(isChristmas());
