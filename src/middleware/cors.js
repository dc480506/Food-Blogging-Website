const jwt= require('jsonwebtoken');
const JWTPrivateKey= require('../config/config').JWTPrivateKey;

module.exports = function(req,res,next){
     // Website you wish to allow to connect
     // console.log("Request made");
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Credentials', true);

     if(req.method=='OPTIONS'){
          res.end()
     }
     else
     // res.setHeader('Access-Control-Expose-Headers','*');
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
 
     // Pass to next layer of middleware
          next();
};