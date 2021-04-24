const _= require('lodash');
const express= require('express');
const mongoose= require('mongoose');
const router = express.Router();
const checkAuthorization =require('../middleware/auth');
const {User,x,y}=require('../models/user.schema');
const getUserID=require('../helpers/extractToken');

router.post('/',checkAuthorization,async (req,res)=>{
    let userID=req.user._id;
    let currentUser=await User.findOne({_id:userID});
    let author= await User.findOne({_id:req.body.id});
    if(!author) return res.status(401).send("Author not found");
    
    res1= await User.findOneAndUpdate(
        {_id:author._id},
        {
            $push:{followers:currentUser._id}
        },
        {new:true}
    )
    res2= await User.findOneAndUpdate(
        {_id:currentUser._id},
        {
            $push:{following:author._id}
        },
        {new:true}
    )
    res.send({currentUser:res2, author:res1});
})



router.delete('/:_id',checkAuthorization,async (req,res)=>{
    let userID=req.user._id;
    let currentUser=await User.findOne({_id:userID});
    let author= await User.findOne({_id:req.params._id});
    if(!author) return res.status(401).send("Author not found");
    
    res1= await User.findOneAndUpdate(
        {_id:author._id},
        {
            $pull:{followers:currentUser._id}
        },
        {new:true}
    )
    res2= await User.findOneAndUpdate(
        {_id:currentUser._id},
        {
            $pull:{following:author._id}
        },
        {new:true}
    )
    res.send({currentUser:res2, author:res1});
})

router.get('/:_id',async (req,res)=>{
    let author= await User.findOne({_id:req.params._id});
    // console.log(author);
    let followersCount=author.followers.length;
    responseObj={
        followersCount:followersCount,
        following:false
    }
    let userID= getUserID(req);
    if(userID){
       var index= _.find(author.followers,function(ch){
            return ch==userID
        })
        if(index!=undefined){
            responseObj['following']=true
        }
    }
    // console.log(responseObj)
    res.send(responseObj)
})

module.exports=router;