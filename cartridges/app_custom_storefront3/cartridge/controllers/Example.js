'use strict';

var server = require('server');

server.get('productDetails', function (req, res, next) {

  var id = req.querystring.id;

  var ProductMgr = require('dw/catalog/ProductMgr');
  var productDetails = ProductMgr.getProduct(id);

  if (productDetails == null) {
    var catalogMgr = require('dw/catalog/CatalogMgr');

    var categoryDetails = catalogMgr.getCategory(id);
  }




  res.render('Training/product', { productDetails: productDetails, categoryDetails: categoryDetails });
  next();

});
module.exports = server.exports();


