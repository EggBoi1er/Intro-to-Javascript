// write a function that accpets a string as a parameter and counts the 
// numbers of vowels:aeiou within the string
// indexOf()

function vowelCount(str) {
    let count = 0;
    const vowels = 'aeiou';
    str = str.toLowerCase();
    
    for (let index = 0; index < str.length; index++) {
        const currentLetter = str[index];
        if(vowels.indexOf(currentLetter) !== -1) // incase it finds none 
            count++;
        
    }
    return count;
}


console.log(vowelCount("brown apple"));
