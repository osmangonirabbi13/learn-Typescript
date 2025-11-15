//type guard
//in typeof

type alphaNeumeric = number | string;

const add = (num1: alphaNeumeric, num2: alphaNeumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

console.log(add(2, 3));
console.log(add(2, "3"));
console.log(add("2", 3));


//in guard

type normalUser = {
    name : string
}

type adminUser ={
    name: string
    role :"Admin"
}

const getUserInfo = (user : normalUser | adminUser)=>{
    if ("role" in user){
        console.log(`this ${user.name} and his role is : ${user.role}`)
    }else{
        console.log(`${user.name}`)
    }
}

getUserInfo({name :"Normal" , role :"Admin"})