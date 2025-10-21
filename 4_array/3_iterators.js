// Reduce(parameter 1, parameter 2)

const numbers = [1, 1, 2, 2];
const total = numbers.reduce((acc, currVal) => {
    console.log(`acc = ${acc} | currVal = ${currVal}`);
    
    return acc + currVal;
}, 0);// second parameter of reduce 

console.log(total);

// let accumulator = 0;
// for(let currentValue of numbers) {
//     accumulator += currentValue;
// }
// console.log(accumulator);






// turning a 2d Array into a 1D array using reduce
// PRACTICE EXAMPLE:
// const array = [[100, 2], [3, 4]];
// const flatArray = array.reduce(() => {
//     // your logic goes here
// }, ...);
// console.log(flatArray); // (100, 2, 3, 4)

// solution
const array = [[100, 2], [3, 4]];
const flatArray = array.reduce((para1, para2) => {
    for(let value of para2) {
        para1.push(value)
    }
    return para1;
}, []); //para 2 as an empty array

console.log(flatArray); // (100, 2, 3, 4)




const students = {
    {name:'Alex', age; 21},
    {name:'Sam', age; 18}
}

const groupStudentsByAge = students.reduce((accum, student) => {
    if(accum[student.age]) {
        accum[student.age].push(student);
    } else{
        accum[student.age] = [student];

    }
    return accum;
}, {});
console.log(groupStudentsByAge);

