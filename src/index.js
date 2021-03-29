const express=require('express');
const path=require('path')
const app=express()
const restaurants=require('./routers/restaurants')
const googleSignIn=require('./routers/googleSignIn');
const rssFeed= require('./routers/rssFeed');
const user= require('./routers/user');
app.use(express.static(path.join(__dirname, 'public')));

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/FBW", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.error("Could not connect to DB");
})  
var UserModel=require('./models/user.schema.js');

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

// For User Model
app.use('/api/user',user);

// For Restaurants details
app.use('/api/restaurants',restaurants);

// For RSS feeds
app.use('/api/feeds',rssFeed);

app.get('/',function(req,res,next){
    console.log("Middleware called at route '/': ");
    console.log(req);
    next();
})

app.get('/',function(req,res){
    console.log("Final function Rendering page... ");
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