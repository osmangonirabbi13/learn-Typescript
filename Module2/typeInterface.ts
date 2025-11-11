type User = {
  name: string;
  age: number;
};


//Interface : Object type : array , object , funcation

interface IUser {
    name : string
    age : number
}

type Role = {
    role : "Admin" | "user"
};


type UserWithRole = User & Role;


interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Mr.X",
  age: 100,
  role: "admin",
};

console.log(user1)