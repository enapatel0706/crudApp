

const { validationResult, matchedData } = require('express-validator');
module.exports={
    userForm:function(req, res) {
        res.render('add_users');
    },
    validateForm:function(req,res){
        const errors= validationResult(req);
        if(!errors.isEmpty()){
          var errMsg= errors.mapped();
          var inputData = matchedData(req);  
    
         }else{
            var inputData = matchedData(req);  
           // insert query will be written here
        }
          res.render('add_users', {errors:errMsg, inputData:inputData});
    }
}