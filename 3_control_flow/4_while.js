let numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

let idx = 0;
while (idx < numbers.length) {
    const element = numbers(index)
    console.log(element);
    
}

let total = 0;
while(true) {
    total += 10;
    if(total ==10) {
        break;
    }
}



// for do-while loops make sure to change the index or else itll run infinitely
//do first check later which is the while line
let i = 0;
do {
    console.log("I am here");
    i++; //changing index
}while(i < 0); // while false