const db = require("../models");
const axios = require("axios");
require('dotenv').config()

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        const options = {
            method: 'GET',
            url: "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + req + "&api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json",
        };

        axios.request(options).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    },

    // Find All Songs in Database
    findAll: (req, res) => {
        db.Playlist
            .findById({ _id: req.user.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Save a Song to Database
    save: (req, res) => {
        db.Playlist
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    // Remove a Song From Database
    remove: (req, res) => {
        db.Playlist
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};

