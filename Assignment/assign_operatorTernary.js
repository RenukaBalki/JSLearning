console.log(`....................STEP 1....................................`);
function maleMarriageEligibility(gender,age,boyName) 
{

var result= gender == "Male" && age>21?" Eligible for marriage":"Not Eligible for marriage";
console.log(`${boyName} is ${result} `);
}
maleMarriageEligibility("Male",25,"Bilgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`....................STEP 2................................`);

function femaleMarriageEligibility(gender,age,girlNmae) 
{
    var result= gender == "Female" && age>18?"Eligible for marriage":"Not Eligible for marriage";
    console.log(`${girlNmae} is ${result} `);

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

