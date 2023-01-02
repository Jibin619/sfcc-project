'use strict'
function getCustomerValue(cid){

    var CustomerMgr = require('dw/customer/CustomerMgr');
    var customer = CustomerMgr.getCustomerByCustomerNumber(cid);
    
    // var id = customer.profile.customerNo;
      return customer;

}

module.exports ={
    getCustomerValue:getCustomerValue
}