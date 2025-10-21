let number = 10;

console.log(`2. numbers = ${number}`);

// will only change the value inside the scope of the block rather than changing the
// global scope of the value which is why it passes by value and returns a different value
function powerTwo(number) {
    number = number ** 2;
    console.log(`Inside the Function = ${number}`);
    
}

powerTwo(number);
console.log(`2. numbers = ${number}`);





// pass by references
const data = {"one": 1, two: 2}
console.log(data);

function addNewItem(data) {
    data["three"] = 3
}

addNewItem(data)
console.log(data);
