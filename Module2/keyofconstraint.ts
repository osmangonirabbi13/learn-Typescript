// keyof : type operator 

type RichPeoplesVehicle ={
    car : string, // key : value 
    bike : string,
    cng : string
}
type MyVehicle1 = "bike" | "car | cng";
type MyVehicle2 = keyof RichPeoplesVehicle
const MyVehicle : MyVehicle2 = "bike"
// console.log(MyVehicle)

const user = {
    name : "Osman Goni",
    userId : 222,
    address : {
        city : "Feni"
    }
}
// const myName = user["name"]
// const myId = user["userId"]
// const myAddress = user["address"]

//console.log(myName , myId,myAddress)

const getPropertyfromObj =<X> (obj : X , key : keyof X) =>{
    return obj[key]
}

// const result = getPropertyfromObj(user , 'osmangoni' )

const product = {
    brand : "HP"
}

const result2 = getPropertyfromObj(product , "brand")
console.log(result2)