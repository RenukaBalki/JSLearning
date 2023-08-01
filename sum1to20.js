// WAP to get the sum of numbers from 0 to 20
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=20; index++) {
         totalSum = totalSum + index;
     }
     console.log(`Sum of first 20 numbers is : ${totalSum}`);
 }
 sum();