const _= require('lodash');
const express= require('express');
const mongoose= require('mongoose');
const Joi = require('joi');
const router = express.Router();
const {Blog,validateBlogData}= require('../models/blog.schema');
const JWTPrivateKey= require('../config/config').JWTPrivateKey;
const jwt= require('jsonwebtoken');

router.get('/',async (req,res)=>{
    const {error}= validateBlogQuery(req.query);
    if(error) return res.status(400).send(error.details[0].message);

    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    let userID= getUserID(req);
    let blogs= await Blog.find({ author: { $ne: userID },'publishInfo.isPublish':true})
    .sort([['_id', -1]])
    .limit(limit)
    .skip((page-1)*limit)
    .populate('author','name email -_id')
    .exec();
    res.send(blogs);
})

router.get('/:_id',async (req,res)=>{
    // let userID=req.user._id;
    let blogID=req.params._id;
    if(!mongoose.Types.ObjectId.isValid(blogID)) return res.status(404).send("Blog doesn't exists");
    let blog= await Blog.findById(blogID);

    if(!blog) return res.status(404).send("1 Blog doesn't exists");
    const result=await Blog.findById(blogID)
    .populate('author','name email -_id');
    res.send(result);
})

function validateBlogQuery(query) {
    const schema = Joi.object({
        page: Joi.number().min(1).required(),
        limit: Joi.number().min(1).max(20).required()
    });
    return schema.validate(query);
}

function getUserID(req){
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

module.exports=router;