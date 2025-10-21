const students = ['Susan', 'Emily', 'Jack']


// NOOB
for(let student of students) {
    console.log("This is my fav student - " + student);
    
}

console.log("-----------------------");


// PRO
students.forEach(student => {
    console.log("This is my fav student - " + student);
    
});

console.log("-----------------------");


// map() iterators
// map is a callback function 
const numbers = [2, 3, 4, 5];
const newNumbers = numbers.map(number => number * -1); // arrow function w/o curly or return
console.log(newNumbers);

// OR
const otherNumbs = numbers.map(number => {
    // ....
    return number * -1;
}); 
console.log(newNumbers);

console.log("-----------------------");






//filter()
const stuff = ['laptop', "calculator", 21, 3.14, -2, "javascript"];
const myNumbers = stuff.filter(thing => { // filtering and creating a new array
    return typeof thing === 'number'; // will only return the numbers in the array
});
console.log(myNumbers);


const myStrings = stuff.filter(word => typeof word === 'string' && word.length > 7);
console.log(myStrings);
