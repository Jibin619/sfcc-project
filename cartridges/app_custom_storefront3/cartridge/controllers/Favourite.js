'use strict';
'use strict'

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');


server.get('Submit', function (req, res, next) {
var pid = req.querystring.pid;
var currentCustomer = req.currentCustomer;
if (currentCustomer.raw.authenticated) {
    var customerNo = parseInt(currentCustomer.profile.customerNo);
    var existCustomer=CustomObjectMgr.getCustomObject('favProduct',customerNo);
    if (existCustomer) {
        var productId=existCustomer.custom.favPid;
        if (productId) {   
            Transaction.wrap(function () {
                var result = productId.concat(" ", pid);
                existCustomer.custom.favPid=result;
            });     
        }
        else{
            Transaction.wrap(function () {
          existCustomer.custom.favPid=pid;
            });
        } 
    }
    else{
        Transaction.wrap(function () {
            var createCustomObject =CustomObjectMgr.createCustomObject('favProduct',customerNo);
            createCustomObject.custom.Product_ID=customerNo;
            createCustomObject.custom.favPid=pid; 
        });  
    }

res.json({product:pid});
return next();
}
else{
    res.redirect(URLUtils.url('Login-Show'));
    next(); 
}
 

});


server.get('Latest', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr')
   
    var currentCustomer = req.currentCustomer;

    if (currentCustomer.raw.authenticated) {

        var customerNo = parseInt(currentCustomer.profile.customerNo);


        var existCustomer=CustomObjectMgr.getCustomObject('favProduct',customerNo);

        var productId=existCustomer.custom.favPid;

        if (productId)
         {
            var peoductDetails=productId.split(" ");

            for(var i=0; i<peoductDetails.length; i++){

                    var productId=peoductDetails[i];
            
        }
        productId;
    }
    }
    
    

    res.render('account/favourite',{productId:productId})
    next();
        

});

server.get('Remove', function (req, res, next) {
    var currentCustomer = req.currentCustomer;
    if (currentCustomer.raw.authenticated) {
        var customerNo = parseInt(currentCustomer.profile.customerNo);
        var existCustomer=CustomObjectMgr.getCustomObject('favProduct',customerNo);
        var productIds=existCustomer.custom.favPid;
       var productcollection=productIds.split(" ");
 var lastProduct =  productcollection[productcollection.length-1]
var lastIndex = productIds.lastIndexOf(" ");
var updatedProductList = productIds.substring(0, lastIndex);
Transaction.wrap(function () {
    existCustomer.custom.favPid=updatedProductList;
});
    }
    res.json({success:true})
    next();
        

});
module.exports = server.exports();


