const _= require('lodash');
const express= require('express');
const fs=require('fs')
const mongoose= require('mongoose');
const path=require('path')
const Joi = require('joi');
const router = express.Router();
const {Blog,validateBlogData}= require('../models/blog.schema');
const {Image}= require('../models/image.schema');
const checkAuthorization =require('../middleware/auth');
const storage = require('../helpers/storage');

let uploadPath="./src/blogUploadImages/";
router.use(checkAuthorization);

router.post('/',storage,async (req,res)=>{
    // console.log("Yo");
    const {error}= validateBlogData(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let userID=req.user._id;

    let blog= await Blog.findOne({author:userID,title:req.body.title});
    if(blog) return res.status(400).send("Blog with the same title already exists");

    blog=new Blog(_.pick(req.body,['title','subtitle','summary','description']));
    if(req.body.publishNow=="true"){
        blog.publishInfo.isPublish=true;
        blog.publishInfo.publishTime=Date.now();
    }
    image= new Image({
        name: req.file.filename,
        desc: blog.title,
        img:{
            data: fs.readFileSync(path.join(__dirname,'../blogUploadImages/' + req.file.filename)),
            contentType: req.file.mimetype
        }
    })
    const imgObj=await image.save();
    blog.author=userID;
    // blog.image_url=req.file.filename;
    blog.image_url=imgObj._id;
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

router.put('/:_id',storage,async (req,res)=>{
    // const {error}= validateBlogData(req.body);
    // if(error) return res.status(400).send(error.details[0].message);
    let userID=req.user._id;
    let blogID=req.params._id;
    let blog= await Blog.findOne({author:userID,_id:blogID});
    if(!blog) return res.status(400).send("Blog doesn't exists");

    if(req.file){
        // fs.unlink(uploadPath+blog.image_url,(err)=>{
        //     if (err) throw err;
        //     console.log('File deleted!');
        // });
        // req.body.image_url=req.file.filename;
        image= new Image({
            name: req.file.filename,
            desc: blog.title,
            img:{
                data: fs.readFileSync(path.join(__dirname,'../blogUploadImages/' + req.file.filename)),
                contentType: req.file.mimetype
            }
        })
        const imgObj=await image.save();
        req.body.image_url=imgObj._id
    }
    console.log(req.body)
    const result=await Blog.findByIdAndUpdate(blogID,req.body,{new:true});
    res.send(result);
})

router.delete('/:_id',async (req,res)=>{
    let blog= await Blog.findOne({_id:req.params._id});
    if(!blog) return res.status(404).send("Blog Not Found");
    // fs.unlink(uploadPath+blog.image_url,(err)=>{
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });
    await Image.findByIdAndDelete(blog.image_url);
    const result=await Blog.findByIdAndDelete(req.params._id);
    res.send(result);
})

router.post('/publish',async (req,res)=>{
    let blog= await Blog.findOne({_id:req.body.id});
    if(!blog) return res.status(404).send("Blog Not Found");
    if(blog.publishInfo.isPublish){
        return res.status(400).send("Blog already published");
    }
    const result=await Blog.findByIdAndUpdate(
        req.body.id,
        {
           publishInfo:{isPublish:true, publishTime:Date.now()} 
        },
        {new:true}
    );
    res.send(result);
})

router.delete('/publish/:id',async (req,res)=>{
    let blog= await Blog.findOne({_id:req.params.id});
    if(!blog) return res.status(404).send("Blog Not Found");
    const result=await Blog.findByIdAndUpdate(
        req.params.id,
        {
           publishInfo:{isPublish:false} 
        },
        {new:true}
    );
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