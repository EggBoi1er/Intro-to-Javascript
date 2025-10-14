/*
TRUTHY VALUES

true
'hello'     // any non-empty string
42           // any non-zero number
-1
[]           // empty array
{}           // empty object
function(){} // any function
Infinity
*/




// || operators return the first truthy value
console.log(false || "Bronco" || "CPP"); // bronco
console.log(false || 11 | 12); // 11

// && operators return the first falsy value
console.log("Cal Poly" && 0); // 0
console.log(1 && "CPP" && -10); // truty && truthy && truthy
// if all values are truthy then return the last truthy value


