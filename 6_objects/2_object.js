const student = {
    // property
    fname: "Emily",
    lname: "Ross",
    // method
    sayHi: function() {
        console.log("Hi everyone");
    },

    sayGoodbye() {
        console.log("Bye bye");
    },

    studentInfo: function() {
        console.log(`${this.fname} ${this.lname}`); // this keyword references to that object so make sure to use this.
        
    }

};

student.sayHi();
student.studentInfo();
