'use strict';
var server = require('server');
server.post('Show', server.middleware.https,
  function(req, res, next) {
 var CustomerMgr = require('dw/customer/CustomerMgr');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
   
    var profileForm = server.forms.getForm('profile');
    
    var Transaction = require('dw/system/Transaction');
    Transaction.wrap(function () {
      var createNewObject = CustomObjectMgr.createCustomObject('proxi1new',profileForm.customer.email.htmlValue);
      createNewObject.custom.firstname=profileForm.customer.firstname.htmlValue;
      createNewObject.custom.secondname=profileForm.customer.lastname.htmlValue;
      // createNewObject.custom.password=profileForm.customer.login.password.htmlValue;
      createNewObject.custom.mobilephone=profileForm.customer.phone.htmlValue;

      createNewObject.custom.email1 = profileForm.customer.email.htmlValue;
      
  });
    

   


 res.render('Training/form');
next();
  });

  module.exports = server.exports();