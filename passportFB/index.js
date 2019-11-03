const express = require('express');
const passport =require('passport');
const passportFb = require('passport-facebook').Strategy;

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());




app.get('/',(req,res)=>{
    res.send("Hi")
});

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/auth/fb', passport.authenticate('facebook'))
app.get('auth/fb/cb', );
app.listen(3000,()=>{
    console.log('server is running');    
})

passport.use( new passportFb({
    clientID:"735912780255898",
    clientSecret: "c0daa72909ec17abdcb21bd2752b9a12",
    callbackURL:"http://localhost:300/auth/fb/cb"
    
},
(accesstoken, refreshToken, profile, done)=>{
    console.log(profile);
}
));

passport.serializeUser((user,done)=>{
    done(null, user.id);
})