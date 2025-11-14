class Parent {
    name : string; //common
    age : number;  //common
    address : string   //common

    constructor(name : string , age : number , address : string){
        this.name = name
        this.age = age
        this.address = address
    }

    getSlepp(time : number){
        console.log(`${this.name} ${time}  ghonta ghumai`)
    }
}

class Teacher extends Parent{
    
    designation : string //own property
    constructor(name : string , age : number , address : string , designation : string){
        super(name , age ,address)
        this.designation =designation
    }
    //own method
    takeClass(time : number){
        console.log(`${this.name} ${time}  class nei`)
    }
}

const teacher = new Teacher("osman goni" , 20 , "Feni , Bangladesh" ,"hi")

teacher.takeClass(12) /// value push