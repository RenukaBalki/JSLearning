function stringHandsOn()
{
    console.log(`...........step 1.................................................`);
    var strn=`      Hey you are doing good,Keep it up      `;
    console.log(strn);
    var result=strn.length;
    console.log(`............step 2.................................................`);
    console.log(`Length of the String ${result}`);
    console.log(`............step 3..........................................................`);
    var trimedStrn=strn.trim();
    var result2=trimedStrn.length;
    console.log(`After removing spaces the length is ${result2}`);
    console.log(`............step 4............................................................`);
   var lengthSpace= result-result2;
   console.log(`Total no. of spaces count is ${lengthSpace}`);
   console.log(`.............step 5.............................................................`);
   var charAT0=trimedStrn.charAt(0)
   var charATEnd=trimedStrn.charAt(result2-1);
   console.log(`After trim first char is "${charAT0}" and Last char is "${charATEnd}"`);
   console.log(`..............step 6..............................................................`);
   var afterSplit=trimedStrn.split(` `);
   console.log(`Toatal words after step 3 is:  ${afterSplit.length}`);
   console.log(`................step 7.................................................................`);
   var indexOfGood=trimedStrn.indexOf('good');
   console.log(`Index of word "good" is ${indexOfGood}`);
   console.log(`...............step 8................................................................`);
   var slicedStrng=trimedStrn.slice(22);
   console.log(`Sliced string is : ${slicedStrng}`);
   console.log(`...............step 9.............................................................`);
  var includesUp= trimedStrn.includes('up');
  console.log(`Is string ends with "up" :${includesUp}`);
  console.log(`............step 10.................................................................`);
  var includesHey= trimedStrn.includes('Hey');
  console.log(`Is string starts with "Hey" : ${includesHey}`);


    


}
stringHandsOn()