'use strict'

var server=require('server')


server.get('Show',server.middleware.https, function(req,res,next){
    var URLUtils = require('dw/web/URLUtils');
    var actionUrl = URLUtils.url('Registeraction-Show');
    var profileForm = server.forms.getForm('profile');

     
    res.render('Training/newRegistration',{profileForm:profileForm,
        actionUrl:actionUrl});

    next();
});

module.exports=server.exports();