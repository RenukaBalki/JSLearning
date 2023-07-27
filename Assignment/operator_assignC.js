console.log(`.................step 1..................................`);
var tcsEligibility=function(gradScore,sscScore,HscScore,name)
{
    var eligible1=(gradScore>70 || HscScore>80 || sscScore>90 )?"Eligible":"Unfortunately you are not eligible";
    console.log(`${name} is ${eligible1} for TCS interview`);

}

tcsEligibility(80,86,90,"Renuka");
tcsEligibility(70,65,55,"Sayali");
tcsEligibility(60,79,88,"Shweta");
