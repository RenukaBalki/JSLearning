function addition()
{
     console.log("this is my function with no argument and no return type");
}
addition();

function addition(arg1,arg2)
{
    var result=arg1+arg2;
    console.log(result);
}
addition(10,20)

function addition(arg1,arg2,arg3)
{
 var result=arg1+arg2+arg3;
 return result;
}
var resultValue = addition(10,20,30);