'use strict';

var base=module.superModule;
var ProductMgr = require('dw/catalog/ProductMgr');
var TotalsModel = require('*/cartridge/models/totals');
var CustomObjectMgr = require('dw/object/CustomObjectMgr')
 function latestFav(customerno) {
    var ImageModel = require('*/cartridge/models/product/productImages');
    if (customerno) {
        var customerNo = parseInt(customerno);
        var existCustomer=CustomObjectMgr.getCustomObject('favProduct',customerNo);
        var productId=existCustomer.custom.favPid;
        if (productId)
         {
            var peoductDetails=productId.split(" ");
        var lastProduct=peoductDetails[peoductDetails.length-1];
        var productDetails=ProductMgr.getProduct(lastProduct);
        var ImageModel= new ImageModel(productDetails, { types: ['medium'], quantity: 'single' });
    //    var price=new TotalsModel(productDetails.priceModel);

        ImageModel= ImageModel.medium[0];
        return favProduct={
            productDetails:productDetails,
            ImageModel:ImageModel
        };
    }
    else{
        return favProduct=false;
    }
   
    }
};

function account(currentCustomer, addressModel, orderModel) {

    base.call(this,currentCustomer,addressModel,orderModel)
    this.favourite= latestFav(currentCustomer.profile.customerNo);
}
module.exports = account;
