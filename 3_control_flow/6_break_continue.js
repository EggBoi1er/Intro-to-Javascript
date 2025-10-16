const numbers = [12, 14, 13, 15, 16];

/*

index = 0
numbers[0] = 12

index = 1
numbers[1] = 14

...

*/ 
// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] >= 15) {
//         break;
//         console.log("I am here");
        
//     }
    
// }


for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] >= 15) {
        continue;
        
        
    }
    console.log(numbers[index]);
}
