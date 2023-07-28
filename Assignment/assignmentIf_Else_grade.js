function voteEligibility(age, name){
    // if block to handle all invalid scenarios
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>130) {
        console.log(`your age ${age} is invalid`); 
    } else {
        // if block to handle all valid scenarios
        if (age>=18) {
            console.log(`you are eligible for vote`);
        } else {
            console.log(`you are not eligible for vote`);
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);


