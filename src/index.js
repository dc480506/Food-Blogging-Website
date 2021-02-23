const express=require('express');
const path=require('path')
const app=express()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/rss_blogs',function(req,res){
    res.sendFile('pages/rss_feeds.html',{root: __dirname });
})

app.get('/restaurants',function(req,res){
    res.sendFile('pages/restaurants.html',{root: __dirname });
})


app.listen(3000,()=>{
    console.log("Server running");
})