const express= require('express');
const router = express.Router();
const rss = require('rss');
const {Blog,validateBlogData}= require('../models/blog.schema');

const site_url='http://localhost:4200/';
router.get('/', async function(req, res) {

  // Create rss prototype object and set some base values
  var feed = new rss({
      title: 'AIT FBW Blog',
      description: 'Latest blogs from different authors',
      feed_url: 'http://' + req.headers.host + req.url,
      site_url: site_url,
      image_url: 'http://' + req.headers.host + '/images/icon.png',
      author: 'AIT-FBW'
  });
  let blogs= await Blog.find({'publishInfo.isPublish':true})
              .limit(10)
              .populate('author','name email -_id')
              .sort({'publishInfo.publishTime':-1})

  blogs.forEach(function(item) {
    
    feed.item({
        title: item.title,
        description: item.summary,
        url: site_url + 'view-blogs/blog/'+item._id,
        author: item.author.name,
        date: item.publishInfo.publishTime
    });      
  });
  res.set('Content-Type', 'application/rss+xml');
  res.send(feed.xml());
});
module.exports=router;