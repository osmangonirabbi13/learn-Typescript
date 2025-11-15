// oop : instance  of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numOdhours: number) {
    console.log(`${this.name} doinik ${numOdhours} ghonta ghumai `);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOdhours: number) {
    console.log(`${this.name} doinik ${numOdhours} ghonta study kore  `);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOdhours: number) {
    console.log(`${this.name} doinik ${numOdhours} ghonta class nei `);
  }
}

//funcation guard

const isStudent = (user:Person)=>{
    return user instanceof Student; // user is student
}
const isTeacher = (user:Person)=>{
    return user instanceof Teacher; // user is Teacher
}

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(12);
  }
};

const person1 = new Person("Mr. Person")
const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. Teacher");


getUserInfo(person1)
getUserInfo(student1);
getUserInfo(teacher1)

