const student = {
    fname: "Emily",
    lname: "Ross",

}

console.log(student);
student.fname = "Rachel"; // modifying the value rather than changing the constant
student.age = "21";
console.log(student);


// below doesnt work because you're assignment is to a constant variable changing rather than modifying
// student = {fname: "Bronco", lname: "CPP"}
// console.log(student);

// const number = 10;
// console.log(number);
// number = 100;
// console.log(number);

