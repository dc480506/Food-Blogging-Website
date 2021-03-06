const express=require('express');
const path=require('path')
const app=express()
const restaurants=require('./routers/restaurants')
const googleSignIn=require('./routers/googleSignIn');
const rssFeed= require('./routers/rssFeed');
const user= require('./routers/user');
const userBlog= require('./routers/userBlog');
const blogs= require('./routers/blogs');
const follow= require('./routers/follow');
const subscribedAuthorBlogs= require('./routers/subscribed-author-blogs');
const blogRSSFeed=require('./routers/blog-rss-feed');
const cors= require('./middleware/cors');
const bodyParser = require('body-parser');

// const cors= require('cors');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/blogImages', express.static(path.join(__dirname,'blogUploadImages')));

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/FBW", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.error("Could not connect to DB");
})  
var UserModel=require('./models/user.schema');
var BlogModel=require('./models/blog.schema');

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

app.use(cors);
//For Google Sign In
app.use('/auth/google',googleSignIn);

app.use(bodyParser.json());
app.use(express.json());

// For User Model
app.use('/api/user',user);

// For User Blog Model
app.use('/api/myblogs',userBlog);

// For Blog
app.use('/api/blogs',blogs);

//For Follow
app.use('/api/follow',follow);

//For Subscribed blogs
app.use('/api/subscribed-author-blogs',subscribedAuthorBlogs);


// For Restaurants details
app.use('/api/restaurants',restaurants);

// For RSS feeds
app.use('/api/feeds',rssFeed);

//For Blogs RSS feeds
app.use('/feeds/rss',blogRSSFeed);

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