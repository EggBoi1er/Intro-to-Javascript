const student = {
    name: 'Kayla',
    major: 'Computer Engineering',

    schedule: {
        morning: "CS 2250",
        evening: "CS 3110"
    }

}


// destructored assignments ie. {name}
const {name} = student;
console.log(name);

const {morning} = student.schedule;
console.log(morning);



// what happens
// console.log(name);
// student['name'] // can print out Kayla but the destructored assignment makes it remove the normal way because its trying to reach a nested object


