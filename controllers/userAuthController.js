const db = require("../models");
require('dotenv').config()
const passport = require("passport");


module.exports = {

    // Find a User in Database
    login: (req, res) => {
        passport.authenticate('local'),
            function (req, res) {
                res.send(req.user);
            }
    },

    // Save a User to Database
    register: (req, res) => {
        let newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        });
    },

    // Send User Data From Database
    userData: (req, res) => {
        res.send(req.user);
    },
    
    // Logout a User From Database
    logout: (req, res) => {
        req.logout();
        res.send(null)
    }
};
