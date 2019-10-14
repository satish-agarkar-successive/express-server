const validateEmail = require('./helper').validateEmail;

module.exports={
    
    emailvalidaitaion(){
    const users=[
        {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }
        ]
    function validateUsers(users)
    {
        let valid=0;
        let invalid=0;
        users.forEach(element => {
            const {traineeEmail:t,reviewerEmail:r}=element;
            console.log(validateEmail);
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
}
}
