const _= require('lodash');
const express= require('express');
const Joi = require('joi');
const router = express.Router();
const {Blog,validateBlogData}= require('../models/blog.schema');
const checkAuthorization =require('../middleware/auth');

router.use(checkAuthorization);

router.post('/',async (req,res)=>{
    // console.log("Yo");
    const {error}= validateBlogData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let userID=req.user._id;

    let blog= await Blog.findOne({author:userID,title:req.body.title});
    if(blog) return res.status(400).send("Blog with the same title already exists");

    blog=new Blog(_.pick(req.body,['title','subtitle','summary','description']));
    blog.author=userID;
    await blog.save();
    //res.send(_.pick(user,['_id','name','email']));
    res.send(blog);
})

router.get('/',async (req,res)=>{
    const {error}= validateBlogQuery(req.query);
    if(error) return res.status(400).send(error.details[0].message);

    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    let userID=req.user._id;
    let blogs= await Blog.find({author:userID})
    .populate('author','name email -_id')
    .sort([['_id', -1]])
    .limit(limit)
    .skip((page-1)*limit)
    .exec();
    res.send(blogs);
})

router.put('/:_id',async (req,res)=>{
    const {error}= validateBlogData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let userID=req.user._id;

    let blogID=req.params._id;
    let blog= await Blog.findOne({author:userID,_id:blogID});
    if(!blog) return res.status(400).send("Blog doesn't exists");
    const result=await Blog.findByIdAndUpdate(blogID,req.body,{new:true});
    res.send(result);
})

router.delete('/:_id',async (req,res)=>{
    const result=await Blog.findByIdAndDelete(req.params._id);
    res.send(result);
})

function validateBlogQuery(query) {
    const schema = Joi.object({
        page: Joi.number().min(1).required(),
        limit: Joi.number().min(1).max(20).required()
    });
    return schema.validate(query);
}

module.exports=router;