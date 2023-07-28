console.log(`_____Step 1_________________________________________`);
function evenOdd(a) 
{
    if (a%2==0) 
    {
        console.log(`${a} is Even Number`);
    } else 
    {
       console.log(`${a} is a Odd Number`); 
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log(`____Step 2___________________________________________________`);

function characterCount(str)
 {
    var count=str.length;
    if (count>10) 
    {
        console.log(`${str} Contain more than 10 character`);
    } else 
    {
        console.log(`${str} does not Contain more than 10 character`);

    }
}
characterCount("JavaScript-ES6")
console.log(`________Step 3_____________________________________________________`);
function starts(str) 
{
    var result=str.startsWith("Java")
    if (result==true) 
    {
        console.log("Yes, the string starts with Java");
    } else 
    {
        console.log("No, the string not starts with Java");

    }
}
starts("JavaScript language");
