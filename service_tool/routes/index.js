var express = require("express");
var router  = express.Router();

// routes
router.get("/", function(req, res){
    res.render("home"); 
});

router.get("/home", function(req, res){
    res.render("home"); 
});

router.get("/dashboard", isLoggedIn, function(req, res){
    res.render("dashboard"); 
});

router.get("/newCustomer", isLoggedIn, function(req, res){
    res.render("newCustomer");
});

router.get("/fcalc", isLoggedIn, function(req, res){
    res.render("fcalc"); 
});

router.get("/accalc", isLoggedIn, function(req, res){
    res.render("accalc"); 
});

router.get("/about", function(req, res){
    res.render("about"); 
});

router.get("/quote", isLoggedIn, function(req, res){
    res.render("quote"); 
});

router.get("/matlist", isLoggedIn, function(req, res){
    res.render("matlist"); 
});

router.get("/heatexchanger", isLoggedIn, function(req, res){
    res.render("heatexchanger"); 
});

// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please Log In First");
    res.redirect("/login");
}

module.exports = router;