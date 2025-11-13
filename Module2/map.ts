//mapped types

//map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfstring: string[] = ["1", "2", "3"];

const arrayOfstringMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfstringMap);

type areaOfnum = {
  height: number;
  width: number;
};

// type areaOfString ={
//     height : string,
//     width : string
// }
type areaOfString = {
  [key in keyof areaOfnum]: string;
};

const user: areaOfString = {
  height: "hello",
  width: "hi",
};
console.log(user);
type Area<T> = {
  [key in keyof T]:T[key];
};


const area1 : Area<{height : number; width : boolean} >={
    height : 50,
    width : true,  
}

