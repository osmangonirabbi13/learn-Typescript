type user ={
    id : number,
    name : {
        fristName : string,
        lastName : string
    },
    gender : "male" | "female",
    contactNo : string,
}


const user2 : user ={
    id : 1,
    name : {
        fristName : "osman goni",
        lastName : "rabbi"
    },
    gender :"male",
    contactNo : "01787641510"
}
const user3 : user ={
    id : 1,
    name : {
        fristName : "osman goni",
        lastName : "rabbi"
    },
    gender :"male",
    contactNo : "01787641510"
}

console.log(user2)
console.log(user3)