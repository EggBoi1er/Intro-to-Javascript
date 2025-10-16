const numbers = [2, 3, 4, 5, 6]

// add items to the end of the array using push()
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.push(11, 12);

// add items to the beginning of the array using unshift()
numbers.unshift(1);
console.log(numbers);
numbers.unshift(-1, 0);
console.log(numbers);


// add items @ the middle of the array using splice()
// numbers.splice(startIndex, numberofItemdstoDelete, ItemtoAdd, AnotherItemtoAdd);
numbers.splice(3, 0, -10, -20); // go to index number 3 , numbers to delete = 0, at index 3 add -10 and -20
console.log(numbers);

// slice(startIndex, endIndex); // ending index is not inclusive so if you want to include it you have to add the ending index by 1
console.log(numbers.slice(2, 6));


// slice without any starting index or any ending index it'll return the array from the starting and ending index
const anotherNumbers = numbers.slice();
console.log(anotherNumbers);

anotherNumbers.push(99)
console.log(numbers);
console.log(anotherNumbers);


// shallow copy 
const arr1 = [[1], [2]];
const arr2 = arr1.slice(); // shallow copy 
console.log(arr1);
console.log(arr2);
// didnt copy a different copy diff copy vs shallow copy
// diff copy copys the array and reference to that array
// changing one object will change the other as well
arr2[0].push(100);
console.log(arr1);
console.log(arr2);

