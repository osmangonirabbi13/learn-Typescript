// Funcation
// arrow funcation , normal funcation

function add (num1 : number , num2 : number){
    let result =  num1 + num2
    return result 
}

console.log(add(10,20))


//arrow funcation 

const addArrow =(num3 : number , num4 : number)=> {
    return num3 * num4
}

console.log(addArrow(5 , 5))

// funcation an objects 

const poorUser = {
    name : "osman goni",
    balance : 2,
    add(value : number){
    const totalBlance = this.balance + value
    return totalBlance
    }
}

console.log(poorUser.add(20))