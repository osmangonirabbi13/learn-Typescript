// Generic Function

// const createArrayWithSting  = (value : string )=>[value]

// const createArrayWithNumber = (value : number) =>[value]

// const createArrayWithObj = (value : {id : number , name : string}) => {
//     return [value]
// }

const createArrayWithGeneric = <T>(value : T ) =>{
    return [value]  /// dynamic type 
}

const arrString = createArrayWithGeneric("hello world")
const arrNumber = createArrayWithGeneric(10)
const arrObj = createArrayWithGeneric({id : 123 , name : "osman goni"})

console.log(arrNumber)

//tuple

const createArrayWithTuple = <X , Y>(value : X , value2 : Y) =>{
    return [value , value2]/// dynamic type 
}

const res1 = createArrayWithTuple('hello' , true)

console.log(res1)