const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Passport = require('passport');
const fs = require('fs');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret:'mysecret'}))
app.use(Passport.initialize());
app.use(Passport.session());

app.get('/',(req,res)=>{
    res.render("index")
});

app.route('/login')
    .get((req, res)=>{
       return res.render('login');
    })
    .post(Passport.authenticate('local',{
        failureRedirect: '/login',
        successRedirect: '/loginok'
    }));

app.get('/loginok',(req,res)=>{
    res.send("HI");
})

Passport.use(new LocalStrategy(( username,password, done)=>{
    fs.readFile('./userDB.json',(err,data)=>{
        let db = JSON.parse(data);
        const userRecord = db.find(x=>x.usr==username && x.pwd ==password);
        if(userRecord){
            return done(null, userRecord)
        } else {
            return done(null, false);
        }
    })
}));
Passport.serializeUser((user, done)=>{
    done(null, user.usr);
});
Passport.deserializeUser((name, done)=>{
    fs.readFile('./userDB.json',(err,data)=>{
        let db = JSON.parse(data);
        const userRecord = db.find(x=>x.usr==name);
        if(userRecord){
            return done(null, userRecord)
        } else {
            return done(null, false);
        }
    })
})

app.listen(3000,()=>{
    console.log('Express is running in port 3000');
    
})