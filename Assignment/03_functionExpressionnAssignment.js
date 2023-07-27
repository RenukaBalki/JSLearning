console.log(`...................step 1..........................`);
var variableName=function(num1)
{
var result=num1*num1;
console.log(`Square of the ${num1} is ${result}`);
}
variableName(5);
variableName(6);
variableName(25);
variableName(100);
variableName(67.89);
variableName(59);
console.log(`................step3...................................`);
console.log(`Type of the VariableName is ${typeof variableName}`);
console.log(`..................step 3.................................`);
var areaOfRectangle=function(length,width)
{
 var area=length*width;
 console.log(`Area of rectanglr is ${area}`);
}
areaOfRectangle(419,917);
console.log(`................step 4......................................`);

var swapValues=function(a,b){
   console.log(`before swapping values are ${a} ${b}`);
    var temp=a;
    a=b;
    b=temp;
    console.log(`After Swaping values are ${a} ${b}`);
}
swapValues("Mahi","Raina");
swapValues(55,77);
console.log(`..............................step 5.....................................`);
var string=function(s){
    var result=s.length;
    console.log(`length of the string is ${result}`);

    var resultValue=s.charAt(6);
    console.log(`Chracter at 6 index is ${resultValue} space`);

    var resultValue=s.charAt(11);
    console.log(`Chracter at 11 index is ${resultValue} space`);


    var resultValue=s.charAt(result-1);
    console.log(`Last character of the string is ${resultValue}`);

    var firstChar=s.charAt(0);
    console.log(`Character at 0 index is ${firstChar}`);

    var lThirdChar=s.charAt(result-3);
    console.log(`Last third character is ${lThirdChar}`);

    var words=s.split(" ");
    console.log(`String : ${words}`);
    var wordsCount=words.length;
    console.log(`Number of words present in the string ${wordsCount}`);

}
string("JS the most popular language of internet");


