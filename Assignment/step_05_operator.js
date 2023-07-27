console.log(`..................step 1............................`);
var greaterNumber=function(a,b){
    var result=a>b?a:b;
    console.log(`Greater Number is ${result}`);

}
greaterNumber(-10,10);
greaterNumber(800,899);
console.log(`...............step 2...............................`);
var isEvenOrOdd=function(a) 
{
    var result=a%2==0?"Even":"Odd"
    console.log(`${a} is ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(0);
isEvenOrOdd(44);
isEvenOrOdd(101);
console.log(`................step 3...................................`);
wordLength=function(a)
{
    var result=a.length;
    var evenOdd=result%2==0?"Even":"Odd";
    console.log(`${a} length is ${evenOdd}`);
}
wordLength("Javascript");
wordLength("Developer");
wordLength("Google");



