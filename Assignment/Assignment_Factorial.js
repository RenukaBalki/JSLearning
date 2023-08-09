function factorial(arg)
{
let result=1;

for (let index = 1; index <=arg; index++) {
    result=result*index;
    
}
console.log(`The factorial of the number is ${result}`);
}
factorial(5);
factorial(9);
factorial(11);
factorial(7);
