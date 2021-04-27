const _= require('lodash');
const express= require('express');
const router = express.Router();
const checkAuthorization =require('../middleware/auth');
const {User,x,y}=require('../models/user.schema');
const {Blog,z}=require('../models/blog.schema');
const cookieParser = require('cookie-parser');

router.use(cookieParser())
router.use(checkAuthorization);
router.get('/',async (req,res)=>{
    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    var maxAge=7*24*60*60*1000;
    let lastVisitedTime=0;
    if(page==1){
        if(req.cookies.last_visited)
            lastVisitedTime= parseInt(req.cookies.last_visited)
        res.cookie('ongoing_request_time',lastVisitedTime,{httpOnly:false,secure:false,maxAge:maxAge})
        res.cookie('last_visited',Date.now(),{httpOnly:false,secure:false,maxAge:maxAge})
    }else if(page>1){
        lastVisitedTime= parseInt(req.cookies.ongoing_request_time);
    }
    let userID= req.user._id;
    let currentUser= await User.findById(userID);
    let blogs= await Blog.find({ author: { $in: currentUser.following  },'publishInfo.isPublish':true})
    .lean()
    .sort([['_id', -1]])
    .limit(limit)
    .skip((page-1)*limit)
    .populate('author','name email -_id')
    .exec();
    blogs.forEach(function(item){
        if(item.publishInfo.publishTime>lastVisitedTime){
            item.isNew=true;
        }else{
            item.isNew=false;
        }
    })

    res.send(blogs);
})

module.exports=router;