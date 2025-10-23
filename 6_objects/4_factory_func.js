const student = {
    //property
    fname: "Emily",
    lname: "Ross",
};

const anotherStudent = {
    //property
    fname: "Rachel",
    lname: "Williams",
};

console.log(student);
console.log(anotherStudent);






// factory function // PRO METHOD
// function createStudentInfo(fname, lname) {
//     return {
//         fname: fname,
//         lname: lname,
//     };
// }

// const student1 = createStudentInfo("Emily", "Ross");
// console.log(student1);

// const student2 = createStudentInfo("Rachel", "Williams");
// console.log(student2);





function createStudentInfo(fname, lname) {
    return {
        fname: fname,
        lname: lname,

        showInfo: function() {
            return `${this.fname}, ${this.lname}`
        }
    };
}

const student1 = createStudentInfo("Emily", "Ross");
console.log(student1);
console.log(student1.showInfo());


const student2 = createStudentInfo("Rachel", "Williams");
console.log(student2);
console.log(student2.showInfo());

