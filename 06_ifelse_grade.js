
function voteEligibility(age){

    if (age==0 || age>120 || age<0 || age==undefined || age==null) {
        console.log(`${age} Invalid data.`);
    } else {
        if (age<18 ) {
            console.log(`${age} Not Eligible for vote.`);
        } else {
            console.log(`${age} Eligible for vote.`);
        }
    }
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)
