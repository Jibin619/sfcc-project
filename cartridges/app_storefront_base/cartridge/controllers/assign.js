'use strict'

var server = require(server);
server.get('Assignment-3', function(req,res,next){

    res.json('succesfully created new controller')

    next();
})

module.exports=server.exports();

