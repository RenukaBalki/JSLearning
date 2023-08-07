console.log(`________Step 2_____`);
class College {
    constructor(name, rollNo, classIn, section, emailId) {
      this.collegeName = name;
      this.collegeRoll = rollNo;
      this.collegeClaa = classIn;
      this.collegeSection = section;
      this.collegeEmail = emailId;
    }
   
        
     display() {
        console.log(
            `college information ${this.collegeName} ${this.collegeRoll} ${this.collegeClaa} ${this.collegeSection} ${this.collegeEmail}`
          );
        
    }
  }
  let college1 = new College("Sinhgad", 20, 11, "c", "renuka@pgmail.com");
  let college2 = new College("Symbiosis", 21, 12, "d", "reka@123gmail.com");
  let college3 = new College("COEP", 22, 11, "e", "guggu@123gmail.com");
  let college4 = new College("SP", 23, 11, "a", "sonu@12345gmail.com");
  let college5 = new College("Cummins", 24, 12, "d", "viksa@987gmail.com");
  
  let collegeIn = [
    college1,
    college2,
    college3,
    college4,
    college5

  ];
  console.log(`Traversing array`);

  for (const college of collegeIn) 
  {
    college.display();
  }
  console.log(`____Step 3`);

  function traverseObject(obj) 
  {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${element} ${key}`);
        
      }
    }
  }
  traverseObject(college1);
  traverseObject(college2);
  traverseObject(college3);
  traverseObject(college4);
  traverseObject(college5);
