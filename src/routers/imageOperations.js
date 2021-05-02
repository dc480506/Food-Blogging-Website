const express= require('express');
const router = express.Router();
const {Image}= require('../models/image.schema');

router.get('/:_id',async (req,res)=>{
    // let userID=req.user._id;
    let imgID=req.params._id;
    try{
        const result=await Image.findById(imgID)
        res.contentType(result.img.contentType);
        res.send(result.img.data);
    }catch(err){
        res.send("")
    }
})

module.exports=router;
