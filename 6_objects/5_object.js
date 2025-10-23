const group = {
    members: {
        leader: {
            name: "Emily",
            major: "CS"
        },
        researcher: {
            name: "Elon",
            major: "Physics"
        },
        coder: {
            name: "Trumph",
            major: "Econ"
        }
    },
    guest: {
        admin: {
            name: "testing"
        }
    }

}

//loop through the object
for(let role in group.members) {
    console.log(group.members[role].name);   // members is not a function so make sure to use [] not () also make sure to go through every step to find the name
}

