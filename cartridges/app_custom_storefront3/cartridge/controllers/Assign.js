'use strict';

var server = require('server');
server.get('Assignment', function(req,res,next){
    var customer = require('*/cartridge/scripts/assginment3');

    var value= customer.getCustomerValue('00006501');  
    res.render('Training/assign',{customer:value});

    next();
});

module.exports=server.exports();