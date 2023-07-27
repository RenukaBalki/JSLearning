console.log(`..................step 1..........................`);
squareOfWordLength=function(a)
{
    var result=a.length;
    var square=result*result;
    console.log(`Square od the string ${a} is ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`.........step 2.....................................`);

var angular=function(a)
{
    var result=a.length;
    var spliting=a.split(" ");
    var reslt2=spliting.length;
    var divide=result/reslt2;
    var multiply=result*reslt2;
    console.log(`division of total length/total words is ${divide} `);
    console.log(`Multiplication of total length and total word is ${multiply}`);

}
angular("I am Angular Developer")