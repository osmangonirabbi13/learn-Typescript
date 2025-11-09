// reference type : objects 

type User = {  // type 
  readonly organization: string; // Access Modifier not changeable
  userName: string;
  fullName?: string; //  optional chaining-style inclusion
  userId: number;
};

const user1: User = {
  organization: "osmanORG",
  userName: "Osman Goni",
  fullName: "Osman Goni Rabbi",
  userId: 1111,
};

const user2: User = {
  organization: "osmanORG",
  userName: "Sabbir Ahmed",
  userId: 2222, 
};

const user3: User = {
  organization: "osmanORG",
  userName: "Nusrat Jahan",
  fullName: "Nusrat Jahan Tania",
  userId: 3333,
};

console.log(user1, user2, user3);