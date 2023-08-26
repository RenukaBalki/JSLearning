class Student{
     id;
     name;
     collegeName;
     gender;

    constructor(id,name,collegeName,gender)
    {
        this.id=id;
        this.name=name;
        this.collegeName=collegeName;
        this.gender=gender;
    }
}

let student1=new Student(4,"renu","ManipalUni","F");

console.log(`${student1.id} : ${student1.name} : ${student1.collegeName} : ${student1.gender}`);

console.log(`----------------------------------------`);

let date=new Date();
console.log(date);
console.log(date.getDate());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.getMinutes());