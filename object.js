let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech Lead",
    city: "Pune",
    isMarried: true,
    show: function(){
        console.log(`Inside show function`);
    }
}
console.log(personGK);

console.log(typeof personGK);

console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);

let isMarried = personGK.isMarried;
console.log(isMarried);

personGK.city = "Mumbai";
console.log(personGK);

delete personGK.designation;
console.log(personGK);

personGK.adharNumber = 123456781234;

personGK.show();

let array = [];

let bank = {
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    address: {
        street: "Wakad Main Road",
        pin: 411057,
        landmark: "Near Petrol Pump",
        telPhone: "020-446789",
        city: "Pune",
        state: "MH",
        country : "India"
    }
}
let element=bank.address.city
console.log(`${element}`);

