//Polymorphism : bohurupi 

class Person{
    getSleep(){
        console.log(`I sleep for 8 hours`)
    }
}

class Student extends Person{
    getSleep() {
        console.log(`I am a student, I sleep 7 hours`)
    }
}

class NextLevelDeveloper extends Person{
    getSleep() {
        console.log(`I am a Next Level Developer .I sleep for 6 hours`)
    }
}

const getSleepingHours = (param: Person) =>{
    param.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

getSleepingHours(person3)