export function validateEmail(users){
    var reg = /^([A-Za-z0-9.])+\@successive.tech$/;
    if (reg.test(users)) 
    {
        return true;
    } else {
        console.log('Invalid Email Address');
        return false;
    }
}