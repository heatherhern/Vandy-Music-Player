const db = require("../models");
require('dotenv').config()


module.exports = {

    // Find a User in Database
    login: (req, res) => {
        res.send(req.user);
    },

    // Save a User to Database
    register: (req, res) => {
        let newUser = new db.User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name
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
    },

    // Save a Song to Database
    save: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Find All Songs in Database
    findAll: (req, res) => {
        db.User
            .find({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};
