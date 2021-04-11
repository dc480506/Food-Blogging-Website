const jwt= require('jsonwebtoken');
const JWTPrivateKey= require('../config/config').JWTPrivateKey;

module.exports = function(req,res,next){
    // console.log("Reached in auth");
    const token =req.header('x-auth-token');
    // console.log('Token: ',token)
    if(!token) return res.status(400).send("Access Denied. No Token provided")
    try{
        const decoded= jwt.verify(token, JWTPrivateKey);
        req.user=decoded;
        next();
    }catch(ex){
        res.status(400).send("Invalid Token")
    }
};

