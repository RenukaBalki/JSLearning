class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monica=new Employee(77,"Monica","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayEmployes=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];
console.log(`___Step 1___`);
arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_company=="TCS") 
    {
        console.log(`EMPLOYEE working in TCS ${Employee.emp_name} and ${Employee.emp_company}`);
    }
})

console.log(`___Step 2___`);

arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_dept=="Finance") 
    {
        console.log(`EMPLOYEE working in Department ${Employee.emp_name} and ${Employee.emp_dept}`);
    }
})

console.log(`___Step 3___`);

arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_name.startsWith("R")) 
    {
        console.log(`EMPLOYEE name Starts with R ${Employee.emp_name} `);
    }
})

console.log(`___Step 4___`);
arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_salary>75000) 
    {
        console.log(`EMPLOYEE Salary Greater than 75000 ${Employee.emp_name} ${Employee.emp_company} ${Employee.emp_salary} `);
    }
})

console.log(`___Step 5___`);
arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_salary>=50000 && Employee.emp_dept=="IT") 
    {
        console.log(`EMPLOYEE Salary Greater than 50000 ${Employee.emp_id} ${Employee.emp_name} ${Employee.emp_company} ${Employee.emp_salary} ${Employee.emp_dept} `);
    }
})

console.log(`___Step 6___`);
arrayEmployes.forEach((Employee)=>{
    if (Employee.emp_company=="Infy") 
    {
        console.log(`EMPLOYEE Company Infy ${Employee.emp_id} ${Employee.emp_name} ${Employee.emp_company} ${Employee.emp_salary} ${Employee.emp_dept} `);
    }
})








