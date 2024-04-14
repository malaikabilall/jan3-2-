// class inheritance and extends:

class School{
    name:string;

    students:Student[]=[];
    teachers:Teacher[]=[];

    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeacher(teachobj:Teacher){
        this.teachers.push(teachobj)
    }

    constructor(name:string){
        this.name=name;
    }
}

class Student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;

    }
}
class Teacher extends Student {
    email:string="";
    contact:string="";
    addInfo(email:string,contact:string){
        this.email=email;
        this.contact=contact;
    }
}

let school1 = new School("Alpha")
let school2 = new School("Nooby")

let s1 = new Student("Malaika",19,school1.name)
let  s2 = new Student("Umaima",19,school2.name)
let s3 = new Student("Mahnoor",18,school1.name)

let t1 = new Teacher("Sohail",41,school1.name)
let t2 = new Teacher("Raheel",40,school1.name)
let t3 = new Teacher("Sohail",40,school2.name)

//add info

t1.addInfo("abc@abc.com","12345")
t2.addInfo("def@default.com","45678")
t3.addInfo("ghi@ghi.com","789078")

//add student

school1.addStudent(s1)
school2.addStudent(s2)
school1.addStudent(s3)

//add teacher

school1.addTeacher(t1)
school2.addTeacher(t3)
school1.addTeacher(t2)


console.log(school1)
console.log(school2)