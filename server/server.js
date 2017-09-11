require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const session = require('express-session');

const app = express();
app.use(bodyParser.json());
//NEED TO REVISE
// app.use( express.static( `${__dirname}/../public/build` ) );

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then( db => {
  app.set('db', db);
});

//AUTHENTICATION
passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done){
     console.log(profile);

  const db = app.get('db');
  db.find_user(profile.id).then( user => {
    console.log(user);
    if(user) {
      return done(null, user);
    } else {
      db.create_user([profile.displayName, profile.emails[0].value,
      profile.picture, profile.id]).then(user => {
        return done(null, user);
      })
    }
  })
}));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(user, done) {
  user.picture = 'https://robohash.org/me';
  var userInfo = {
    id: user.id,
    first: user.first,
    last: user.last,
    picture: user.picture
  }
  done(null, userInfo);
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(user, done){
  done(null, userInfo) //PUTS ON req.user
});

//SET UP OUR ENDPOINTS (NEED 4 ENDPOINT PER OUR DESIGN)
//ENDPOINT #1 - AUTHORIZATION ENDPOINTS
app.get('/api/auth/login', passport.authenticate('auth0'));

//ENDPOINT #2 - AUTHORIZATION ENDPOINT
app.get('/api/auth/callback', passport.authenticate('auth0', {
   successRedirect: 'http://localhost:3000/#/dashboard',
   failureRedirect: 'http://localhost:3000/#/'
 }));

//ENDPOINT #3
app.get('/api/auth/authenticated', (req, res) => {
  if(!req.user) {
    return res.status(404).send('User not found')
   } else {
     return res.status(200).send(req.user);
   }
 });

//ENDPOINT #4 (Logout)
app.post('/api/auth/logout', (req, res) => {
   req.logout() //PASSPORT GIVES US THIS TO TERMINATE A LOGIN SESSION
   return res.redirect(302, 'http://localhost:3000/#/'); //res.redirect comes from express to redirect user to the given url
     //302 is the status code for redirect
});

//FRIEND ENDPOINTS


let PORT = 3005;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
