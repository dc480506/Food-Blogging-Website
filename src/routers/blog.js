const _= require('lodash');
const express= require('express');
const router = express.Router();
const Blog= require('../models/blog.schema');
const checkAuthorization =require('../middleware/auth');

router.use(checkAuthorization);

router.post('/',async (req,res)=>{
    // const {error}= validateRegistrationData(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    // let user= await User.findOne({email:req.body.email});
    // if(user) return res.status(400).send("User already exists");

    // user=new User(_.pick(req.body,['name','email','password']));
    // await user.save();
    //res.send(_.pick(user,['_id','name','email']));
    res.send('create blog');
})

router.get('/',async (req,res)=>{
    // const {error}= validateRegistrationData(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    // let user= await User.findOne({email:req.body.email});
    // if(user) return res.status(400).send("User already exists");

    // user=new User(_.pick(req.body,['name','email','password']));
    // await user.save();
    //res.send(_.pick(user,['_id','name','email']));
    res.send('Read blog');
})

router.put('/',async (req,res)=>{
    // const {error}= validateRegistrationData(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    // let user= await User.findOne({email:req.body.email});
    // if(user) return res.status(400).send("User already exists");

    // user=new User(_.pick(req.body,['name','email','password']));
    // await user.save();
    //res.send(_.pick(user,['_id','name','email']));
    res.send('Update blog');
})

router.delete('/',async (req,res)=>{
    // const {error}= validateRegistrationData(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    // let user= await User.findOne({email:req.body.email});
    // if(user) return res.status(400).send("User already exists");

    // user=new User(_.pick(req.body,['name','email','password']));
    // await user.save();
    //res.send(_.pick(user,['_id','name','email']));
    res.send('Delete blog');
})

module.exports=router;