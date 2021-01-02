const db = require("../models");
const axios = require("axios");

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        axios.get("INSERT URL HERE")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))
    },

    // Find All Songs in Database
    findAll: (req, res) => {
        db.Song
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Save a Song to Database
    save: (req, res) => {
        db.Song
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Remove a Song From Database
    remove: (req, res) => {
        db.Song
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    },
};