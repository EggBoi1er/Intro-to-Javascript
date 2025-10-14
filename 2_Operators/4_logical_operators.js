console.log(true && false);  // false
console.log(false && false); // false - short circuit evaluation
console.log(true && true);   // true
console.log(false && true);  // false
// "&&" (AND) returns true only if both sides are true
// Stops early if the left side is false (short-circuit)


const age = 16;
const getDriverLicense = (age == 16) ?? false;
console.log(!getDriverLicense); 
// true ?? false → true (since true is not null or undefined)
// !true → false


// nullish coalescing operator: ??
// procide a default value if the operand before the ?? is false
// return the right hand side value if the lefthand value is null or undefined

// let user = null;
// const username = user ?? false
// console.log(`username: ${username}`);

let user = null;
const username = user ?? 'default user';
const dummyUsername = (user !== null && user !== undefined) ? user : 'default user'
console.log(`dummyUsername: ${dummyUsername}`);

