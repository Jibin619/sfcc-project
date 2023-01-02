'use strict';

var server = require('server');
server.get('getCategories', function (req, res, next) {

    var catalogMgr = require('dw/catalog/CatalogMgr')
    var siteCategory=catalogMgr.getSiteCatalog();
   

    var printCategory=siteCategory.root.subCategories;

    res.render('Training/demo',{printCategory:printCategory});

    next();
});

module.exports = server.exports();