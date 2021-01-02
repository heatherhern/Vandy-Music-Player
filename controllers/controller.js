const db = require("../models");
const axios = require("axios");

module.exports = {

    // Make Api Call
    apiCall: (req, res) => {
        axios.get("INSERT URL HERE")
            .then((response) => res.json(response.data))
            .catch(err => res.status(422).json(err))
    },
}