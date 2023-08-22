console.log(`_____________Step 1_____________`);
let arrowFunc = ()=>{
    console.log(`"Good morning,Today is Tuesday"`)
}
arrowFunc();

console.log(`_____________Step 2_____________`);

let arrowFunc2 = (num1,num2,num3=1)=>{
console.log(`Values are with arguments and with default arguments ${num1}, ${num2} ,${num3}`);
}
arrowFunc2(5,5,2);
arrowFunc2(10,4);

console.log(`_____________Step 3_____________`);

let arrowFunc3 = (one,two,three,four,five)=>{
    return one  +  two  +  three  +  four  +  five;


}
let result = arrowFunc3(100,100,200,349,756);
let result2 = arrowFunc3("I am", " Learning " ,  " ES6 ",  " Features "," in depth ");
console.log(`Addition by using Arrow Function ${result} `);
console.log(`Concatenation by using Arrow Function ${result2} `);





