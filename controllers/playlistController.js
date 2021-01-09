const db = require("../models");
const axios = require("axios");
require('dotenv').config()

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + req,
            headers: {
                'x-rapidapi-key': 'process.env.x-rapidapi-key',
                'x-rapidapi-host': 'process.env.x-rapidapi-host'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
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
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
};

