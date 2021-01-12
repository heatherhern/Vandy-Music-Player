import axios from "axios";
require('dotenv').config();

export default {
    APICall: function (searchQuery) {
        return axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + searchQuery + "&api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json");
    },

    // getAlbum: function (query) {
    //     return axios.get("https://api.deezer.com/album/302127" + query);
    // },

    // getArtist: function (query) {
    //     return axios.get("https://api.deezer.com/artist/" + query);
    // },

    // getChart: function (query) {
    //     return axios.get("https://api.deezer.com/chart/" + query);
    // },

    // Gets all Songs
    getSongs: function () {
        return axios.get("/api/songs");
    },

    // Gets a Specific Song 
    getSong: function (id) {
        return axios.get("/api/songs/" + id);
    },

    // Saves a Song to the Database
    saveSong: function (savedSongs) {
        return axios.post("/api/songs", savedSongs);
    },

    // Deletes a Song
    deleteSong: function (id) {
        return axios.delete("/api/songs/" + id);
    },
};


