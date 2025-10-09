// 1. String
let fname = 'Bronco';
let lname = 'CPP';
let fullName = `${fname} ${lname}`
console.log(fullName)

// 2. Number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi)

// 3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam)

// 4. undefined
let index;
console.log(typeof index)


// 5. null
let idx = null
console.log(typeof idx)

// 6. symbol
const secretKey = Symbol();


let userCustomizedChoice = 'username';

// -----Object-----
let cppCourse = {
    name: 'CS 2250',
    'hours': 3,
    semester: 2025,
    'school name': "Cal Poly Pomona",
    [userCustomizedChoice]: "User name",
}
console.log(cppCourse.name);
// OR sqr bracket + single/double quote w/ name of the key
console.log(cppCourse['hours']);
console.log(cppCourse.hours);
// if there is a space in the key name you have to use the bracket way
console.log(cppCourse["school name"]);
console.log(cppCourse[userCustomizedChoice]);


cppCourse.name = 'Wev Development';
cppCourse["school name"] = "CPP";

// adding new key-value pair
cppCourse['location'] = 'Pomona, CA'
console.log(cppCourse);

// delete a key-value pair
delete cppCourse['location']
console.log(cppCourse);



