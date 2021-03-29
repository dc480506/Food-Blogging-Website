const _= require('lodash');
const express= require('express');
const router = express.Router();
const {User,validateRegistrationData,validateData}= require('../models/user.schema');
const checkAuthorization =require('../middleware/auth');

router.post('/register',async (req,res)=>{
    const {error}= validateRegistrationData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user= await User.findOne({email:req.body.email});
    if(user) return res.status(400).send("User already exists");

    user=new User(_.pick(req.body,['name','email','password']));
    await user.save();
    res.send(_.pick(user,['_id','name','email']));
})

router.post('/login',async (req,res)=>{
    const {error}= validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user= await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Invalid email or password");
    const validPassword=await user.verifyPassword(req.body.password);
    if(!validPassword) return res.status(400).send("Invalid email or password");
    const token= user.generateAuthToken();
    res.header('x-auth-token',token).json(_.pick(user,['_id','email']));
})

router.post('/changePassword',async (req,res)=>{
    const {error}= validateData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user= await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email does not exists");
    const newPasswdHash=await user.generatePasswordHash(req.body.password);
    const result=await User.findByIdAndUpdate(user._id,{password:newPasswdHash});
    res.send(result);
})

router.get('/deleteAccount',checkAuthorization, async(req,res)=>{
   const result=await User.remove({_id:req.user._id});
   res.send(result);
})
module.exports=router;