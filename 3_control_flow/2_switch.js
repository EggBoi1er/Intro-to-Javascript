let course = "CS 2250";

if(course.toLowerCase() === 'cs 2250') {
    console.log("web development");
    
} else if(course.toLowerCase() === 'cs 4800') {
    console.log("software engineer");
    
} else if(course.toLowerCase() === 'cs 3310') {
    console.log("algorithm");
    
} else if(course.toLowerCase() === 'cs 3110') {
    console.log("formal language");
    
} else {
    console.log("other courses");
    
}

// make sure to use breaks in switch statements 
switch (course.toLowerCase()) {
    case "cs 2250":
        console.log("web development");
        break;
    case "cs 4800":
        console.log("software engineer");
        break;
    case "cs 3310":
        console.log("algorithm");
        break;
    case "cs 3110":
        console.log("formal language");
        break;
    default:
        console.log("other courses");
        
}
