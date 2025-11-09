// Spread Operator

const friends = ["hello " , " hi "]
const friends1 = ["hlw" , " rabbi"]

friends.push(...friends1)

console.log(friends)

//rest Operator 

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");