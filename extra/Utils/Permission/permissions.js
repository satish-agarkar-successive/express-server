
const users=require('../../constants').users;
module.exports={
    permission:function(){
       
            
            if(users.hasOwnProperty('getUsers')) {
                
             if(users['getUsers'].hasOwnProperty('read')) {
               
               if(users['getUsers']['read'].includes('trainee')){
               console.log(true);
               }else{
                   console.log(false);
               }
             }else{
                console.log('Permission type is not found ');
             }
            }else{
                console.log('Module name is not found');
            }
    }
}
