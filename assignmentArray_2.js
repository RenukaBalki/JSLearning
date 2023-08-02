constArrayNumber=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`____Step 1_______`);
let element=constArrayNumber.length;
console.log(`The total number of element available in Array is :${element}`);

console.log(`____Step 2_______`);
let element1=constArrayNumber[0];
let element2=constArrayNumber[constArrayNumber.length-1];
console.log(`First and last element in the array is ${element1} and ${element2}`);

console.log(`____Step 3_______`);
let element3=constArrayNumber[constArrayNumber.length-3];
console.log(`Third last element in the Array is : ${element3}`);

console.log(`____Step 4_______`);
for (let index = 1; index < constArrayNumber.length; index=index+2)
 {
    const element = constArrayNumber[index];
    console.log(`Even element in the Array : ${element}`);
    
}
console.log(`____Step 5_______`);
for (let index = 0; index < constArrayNumber.length; index=index+2)
 {
    const element = constArrayNumber[index];
    console.log(`Odd element in the Array : ${element}`);
    
}
console.log(`____Step 6_______`);
var count=0;
for (let index = 1; index < constArrayNumber.length; index=index+2)
 {
    const element = constArrayNumber[index];
    var count=count+element
    
    
}
console.log(`Even Number count: ${count}`);

console.log(`____Step 7_______`);

var count=0;
for (let index = 0; index < constArrayNumber.length; index=index+2)
 {
    const element = constArrayNumber[index];
    var count=count+element
    
    
}
console.log(`Odd Number count: ${count}`);

console.log(`____Step 8_______`);

var count=0;
for (let index = 0; index < constArrayNumber.length; index++)
 {
    const element = constArrayNumber[index];
    var count=count+element
    
    
}
console.log(`Sum of all the element in Array: ${count}`);

console.log(`____Step 9_______`);
count=0;
for (let index = 0; index < constArrayNumber.length; index++) {
    const element = constArrayNumber[index];
    if(element%5==0)
    {
        console.log(`Element divisible by 5 ${element}`);
    }

    
}
console.log(`____Step 10_______`);
let element4=constArrayNumber.includes(115);
console.log(`Is number 115 is available in array ${element4}`);

console.log(`____Step 11_______`);
let element5=constArrayNumber.includes(23);
console.log(`Is number 23 is available in array ${element5}`);

console.log(`____Step 12_______`);
constArrayNumber.splice(2,0,55,66);
console.log(`Inserted the number 55 and 66 ___[${constArrayNumber}]`);

console.log(`____Step 12_______`);
constArrayNumber.splice(4,3);
console.log(`3 elements deleted from the Array __[${constArrayNumber}]`);












