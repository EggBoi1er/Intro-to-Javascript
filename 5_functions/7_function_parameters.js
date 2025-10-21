function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function bye() {
    console.log("Bye bye!");
    
}
//when evoking a function alone you need parenthesis but this bye function is a callback function
// call back function doesn't need to have parenthesis when called
// call back is a function that passes another function as a parameter
greet("CS 2250", bye) 




// asynchronous
// timeout is done in milliseconds so 3000 =  3 sec
// setTimeout(function() {
//     console.log("This message will show after 3 seconds");
// }, 3000);

// // OR (Pro method) 

// setTimeout(() => {
//     console.log("This message will show after 4 seconds");
// }, 4000);







function boilWater(callback) {
    console.log("boiling water now...");
    
    setTimeout(() => {
        console.log("water is boiled");
        callback();
    }, 4000);
}

function cookPasta(){
    console.log("I am cooking my pasta");
    
}

boilWater(cookPasta);
console.log("Meanwhile i am cooking some veggies");
