// Utility Types 

type Product = {
    id : number,
    name : string,
    price : string,
    stock : number,
    color : string
}

type ProductSummary = Pick<Product , "id" | "name" | "price">

// let tap :ProductSummary ={
//     id : 123,
//     name :"tablet",
//     price : "20000"
// }
// console.log(tap)

type ProductWithoutStock = Omit<Product , "stock" | "color">

// let tap : ProductWithoutStock ={
//     id : 123,
//     name :"tablet",
//     price : "20000"
// }
// console.log(tap)

type ProductWithColor = Required<Product>

// let tap : ProductWithColor ={
//     id : 123,
//     name :"tablet",
//     price : "20000",
//     stock : 12,
//     color : "red"
// }
// console.log(tap)

type OptionalProduct = Partial<Product>


type readOnly = Readonly<Product>

const enptyObj : Record<string, unknown> ={}