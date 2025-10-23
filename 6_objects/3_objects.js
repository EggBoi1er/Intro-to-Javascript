const student = {
    //property
    fname: "Emily",
    //method
    traditional_funct() {
        console.log(this.fname);
    },

    studentInfo: function() {
        console.log(this.fname);
    },

    showInfo: () => {
        console.log(this.fname);
        
    }
};

student.traditional_funct();
student.studentInfo();
student.showInfo(); // undefined due to the arrow function so use the other 2 if calling a funciton like this