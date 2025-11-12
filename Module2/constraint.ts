// constraint : strict rules deya

type Stuent = { id: number; name: string; dateOfBirth: string; class: string };

const addStudentToCourse = <T extends Stuent>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const stuent1  = {
    id : 123,
    name :"osman goni",
    hasPen : true,
    dateOfBirth: "06-07-2005",
    class : "12"
}

const result = addStudentToCourse(stuent1)

console.log(result)