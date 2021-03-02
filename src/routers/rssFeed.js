const express= require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')
const feed = require('feed-read')
const feedURL= "https://www.vegrecipesofindia.com/feed/";

router.use(cookieParser());

router.get('/fetch-feeds',(req,res)=>{
    var lastVisited=0;
    if(req.cookies.last_visited){
        lastVisited=parseInt(req.cookies.last_visited);
        console.log(lastVisited);
    }
    let currentTime=Date.now();
    feed(feedURL,function(err,articles){
        articles.forEach(function (feed) {
            // console.log(feed.date)
            feed.published = new Date(feed.published).toGMTString();
            feed.content= feed.content.split("<p>")[1].split("</p>")[0].slice(0,250)+" ...... "
            // feed.categories = feed.categories.join()
            var date = new Date(feed.published); // some mock date
            var msPublish = date.getTime();
            if(msPublish>lastVisited)
                feed.isNew=true;
            else
                feed.isNew=false;
        });
        res.cookie('last_visited',currentTime).status(200).json({feeds:articles});
    });
})

module.exports=router;