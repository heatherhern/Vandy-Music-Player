const db = require("../models");
const axios = require("axios");


module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + req.params.title,
            headers: {
                'x-rapidapi-key': '51a5c1610dmsh2b1ce414cd0adadp170608jsnc37c2b314de8',
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
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
            .then(dbModel => res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    },
};

