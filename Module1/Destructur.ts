//objects Destructur 
//  array Destructuring 

const user = {
  id: 123,
  name: {
    firstName: "osman",
    middleName: "goni",
    lastName: "rabbi",
  },
  gender: "male",
  favouriteColor: "black",
};

const {id , name : {firstName}} = user

console.log(id , firstName )