var express     =   require("express"),
    app         =   express(),
    bodyParser  =   require("body-parser"),
    mongoose    =   require("mongoose"),
    flash       =   require("connect-flash"),
    passport    =   require("passport"),
    LocalStrategy = require("passport-local"),
    User        =   require("./models/user"),
    admin = require('firebase-admin'),
    serviceAccount= require("./public/firebasecred.json");
    
var authRoutes  = require("./routes/auth"),
    indexRoutes = require("./routes/index");
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/service_tool_v1", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());

//passport configuration
app.use(require("express-session")({
    secret: "the world is a vampire",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://customers.firebaseio.com'
});



// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Log In First");
    res.redirect("/login");
}

app.use(authRoutes);
app.use(indexRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Service Tool Server Started");
});