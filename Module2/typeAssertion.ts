let anything : any;
anything = "osman goni"

const kgToGmConverter =(input : string | number) : string |number |undefined   =>{
    if(typeof input === "number"){
        return  input * 1000
    }else if(typeof input === "string"){
        const [value] = input.split(" ")
        return `Converted output is : ${Number(value) * 1000}`
    }
}

const result1 = kgToGmConverter(4) as number
const result2 = kgToGmConverter("2 kg")

console.log(result1)
console.log(result2)