const _= require('lodash');
const express= require('express');
const mongoose= require('mongoose');
const Joi = require('joi');
const router = express.Router();
const {Blog,validateBlogData}= require('../models/blog.schema');
const getUserID=require('../helpers/extractToken');
const checkAuthorization =require('../middleware/auth');
const { result } = require('lodash');

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
    .populate('author','name email _id');
    res.send(result);
})

router.get('/like-dislike/:_id',async (req,res)=>{
    // let userID=req.user._id;
    let blogID=req.params._id;
    if(!mongoose.Types.ObjectId.isValid(blogID)) return res.status(404).send("Blog doesn't exists");
    let blog= await Blog.findById(blogID);

    if(!blog) return res.status(404).send("1 Blog doesn't exists");

    responseObj={
        'liked':false,
        'disliked':false
    }
    const userID=getUserID(req);
    if (userID){
        if(checkEntry(blog.likedBy,userID)!=undefined){
            responseObj['liked']=true
        }
        if(checkEntry(blog.dislikedBy,userID)!=undefined){
            responseObj['disliked']=true
        }
    }
    responseObj['likesCount']=blog.likedBy.length;
    responseObj['disLikesCount']=blog.dislikedBy.length;
    res.send(responseObj);
})

router.post('/like-dislike',checkAuthorization,async (req,res)=>{
    let userID=req.user._id;
    let blog= await Blog.findOne({_id:req.body.id});
    if(!blog) return res.status(404).send("Blog not found");
    let updateVar={}
    if (req.body.like==true){
        updateVar={
            $addToSet:{likedBy:userID},
            $pull:{dislikedBy:userID}
        }
    }
    else if(req.body.like==false){
        updateVar={
            $addToSet:{dislikedBy:userID},
            $pull:{likedBy:userID}
        }
    }
    const result= await Blog.findOneAndUpdate(
        {_id:blog._id},
        updateVar,
        {new:true}
    )
    res.send(result);
})

router.put('/like-dislike/:id',checkAuthorization,async (req,res)=>{
    let userID=req.user._id;
    let blog= await Blog.findOne({_id:req.params.id});
    if(!blog) return res.status(404).send("Blog not found");
    let updateVar={}
    if (req.body.removeLike==true){
        updateVar={
            $pull:{likedBy:userID}
        }
    }
    else if(req.body.removeLike==false){
        updateVar={
            $pull:{dislikedBy:userID}
        }
    }
    const result= await Blog.findOneAndUpdate(
        {_id:blog._id},
        updateVar,
        {new:true}
    )
    res.send(result);
})

function checkEntry(arr,userID) {
    var index= _.find(arr,function(ch){
        return ch==userID
    })
    return index;
}

function validateBlogQuery(query) {
    const schema = Joi.object({
        page: Joi.number().min(1).required(),
        limit: Joi.number().min(1).max(20).required()
    });
    return schema.validate(query);
}



module.exports=router;