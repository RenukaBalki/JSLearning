const arrayNums=[20,3,4,56,90,400,49];
const arrayNums1=arrayNums;
arrayNums1.push(55);
arrayNums1.push(66);
console.log(`Original Clone ${arrayNums}`);
console.log(` Clone ${arrayNums1}`);


let element=[...arrayNums];
arrayNums.push(10);
arrayNums.push(25);
console.log(arrayNums);
console.log(arrayNums1);

let arrayEven=[2,14,30,8];
let element1=[...arrayEven, ...arrayNums];
console.table(element1);

const employeeInfo={
    emp_Id : 27,
    emp_name :  "John Doe",
    salary : {
        july_month : "40,000INR",
        aug_month : "50,000INR",
        june_month : "65,000INR"


    },
    address : {
        locality : {
            colony : "Om Vridavan society",
            street : "Kanch Pokli , 431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobile :[ "+91 8600 3456 88","1800-4567 32", "+91- 9096 5678 77"]
}
console.log(employeeInfo.address.locality , employeeInfo.address.city, employeeInfo.address.state, employeeInfo.address.country);
console.log(employeeInfo.mobile);

let element3=JSON.parse(JSON.stringify(employeeInfo.salary));
let element4=JSON.parse(JSON.stringify(employeeInfo.address));

employeeInfo.salary.july_month="80,000INR";
employeeInfo.address.country="United kingdom";

console.log(employeeInfo.salary.july_month);

console.log(employeeInfo);
console.log(employeeInfo.salary.july_month);
console.log(employeeInfo.address.country);

