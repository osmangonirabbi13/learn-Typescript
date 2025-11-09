//? array , objects

//? ts -> tuple

let itemList : string[] = ["eggs" , "milk" , "oil"]  
// itemList.push(1)//error 
console.log(itemList)

let itemList1 : (number | string | boolean)[] =["eggs" , 10 , true]   
console.log(itemList1)

let tuple : [number , string , boolean] = [10 , "osman" , true]
console.log(tuple)