const express=require('express');
const path=require('path')
const app=express()
const restaurants=require('./routers/restaurants')
const googleSignIn=require('./routers/googleSignIn');
const rssFeed= require('./routers/rssFeed');
app.use(express.static(path.join(__dirname, 'public')));

const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


//For Google Sign In
app.use('/auth/google',googleSignIn);

app.use(express.json());

// For Restaurants details
app.use('/api/restaurants',restaurants);

// For RSS feeds
app.use('/api/feeds',rssFeed);

app.get('/',function(req,res){
    res.sendFile('pages/index.html',{root: __dirname });
})

app.get('/rss_blogs',function(req,res){
    res.sendFile('pages/rss_feeds.html',{root: __dirname });
})

app.get('/restaurants',function(req,res){
    res.sendFile('pages/restaurants.html',{root: __dirname });
})

app.use(function(req,res,next){
    res.type('.html')
    res.status(404)
    res.sendFile('pages/404.html',{root: __dirname });
})

app.listen(3000,()=>{
    console.log("Server running");
})