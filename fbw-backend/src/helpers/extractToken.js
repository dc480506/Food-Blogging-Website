const JWTPrivateKey= require('../config/config').JWTPrivateKey;
const jwt= require('jsonwebtoken');

module.exports= function (req){
    const token =req.header('x-auth-token');
    // console.log('Token: ',token)
    let userID=null;
    if(!token) {return userID};
    try{
        const decoded= jwt.verify(token, JWTPrivateKey);
        userID=decoded._id;
    }catch(ex){
    }
    return userID;
}
