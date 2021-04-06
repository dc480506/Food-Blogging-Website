const URL=require('../config/config').URL
const express=require('express')
const passport = require('passport');
const router = express.Router();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '784580307034-oi4spnhabh0ud5repv0atttessaflqdl.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'RHiqupnhhTv0GmmXkeiGjbQr';
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${URL}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
router.get('/', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/rss_blogs');
  });

module.exports=router;