 const users=[
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    }
    ]
    function validateEmail(users){
        var reg = /^([A-Za-z0-9.])+\@successive.tech$/;
// console.log(reg.test(users));
        if (reg.test(users)) 
        {
            return true;
        } else {
            console.log('Invalid Email Address');
            return false;
        }


}
function validateUsers(users)
{
    let valid=0;
    let invalid=0;
    users.forEach(element => {
        const {traineeEmail:t,reviewerEmail:r}=element
        if(validateEmail(t) && validateEmail(r))
        {
            valid +=1;

        console.log(t,r);
            
        }
        else{
            invalid +=1;
            console.log(t,r);
          
        }
    });
}
validateUsers(users);