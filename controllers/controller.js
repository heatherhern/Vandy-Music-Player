const db = require("../models");
const axios = require("axios");
const request = require('request'); 
let client_id = 'fa815dbc6eeb4d67ac7eceac01a7caa5'; 
let client_secret = 'a32a2cb1e69d428dba7a141d61d21e30'; 

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        axios.get("https://api.spotify.com")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))
    },
}

// your application requests authorization
var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
            url: 'https://api.spotify.com/v1/users/jmperezperez',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        };
        request.get(options, function (error, response, body) {
            console.log(body);
        });
    }
});

// GET https://api.spotify.com/v1/search