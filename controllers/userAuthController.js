const db = require("../models");
const axios = require("axios");
require('dotenv').config()


module.exports = {

    // Find a User in Database
    findOne: (req, res) => {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Save a User to Database
    save: (req, res) => {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Remove a User From Database
    remove: (req, res) => {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};
