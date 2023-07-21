function run() 
{
    console.log("Hello function 1 JS");
}
function eat()
 {
    console.log("Hello Function 2 JS");
}
run();
eat();
console.log(".........................................................");

function personalDetails(firstName,lastName,collegeName)
{
    console.log("first Name :",firstName ,"last Name :",lastName,"College Name",collegeName);
}
personalDetails("Renuka","Balki","Azam campus");
console.log(".......................................................................");

function swapValues(arg1,arg2)
{
    console.log("Before Swaping Argument 1 :",arg1,"Argument 2 :",arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After swaping Argument 1:",arg1,"Argument 2 :",arg2);

}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("............................................................................");
function addThreeValues(arg1,arg2,arg3) 
{
    var result=arg1+arg2+arg3;
    console.log("Addition is",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");
console.log("...............................................................................");

function bankDetails(bankName,accountNum,location,pinCode) 
{
    console.log("Bank Name :",bankName,"Account Number :",accountNum,"Location :",location,"Pin Code :",pinCode);
}
bankDetails("CITI Bank",3456782345,"Pune",431202);
bankDetails("Axis",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,"Open");
console.log(".....................Completed.......................");
