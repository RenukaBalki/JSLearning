bankSbi={
    bankName: "sbi",
    accnt : 123456,
    ifsc : 56789,
    accntHolder : "Samu Sham"
}
bankLocation ={
    street:"High Street",
    city:"Pune",
    pincode:442501
}

let element=Object.assign({} , bankLocation);

let element1={...bankLocation};

console.table(element);

console.table(element1);

let rateOfInterest={
    homeLoanInterest: 7,
    personalLoanInterest :6,
    dueInterest :4
}
let mergeObjects=Object.assign({},bankSbi, bankLocation,rateOfInterest)
console.table(mergeObjects);

let array=[bankSbi, bankLocation,rateOfInterest]
for (const element of array) 
{
    console.log(element);
}