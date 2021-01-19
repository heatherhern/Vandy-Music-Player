import axios from "axios";
require('dotenv').config();

export default {
    getArtist: function (query) {
        return axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + query + "&api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json");
    },

    getAlbum: function (query) {
        return axios.get("/2.0/?method=album.search&album=" + query + "&api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json");
    },
    
    // getSong: function (query) {
    //     return axios.get("/2.0/?method=track.search&track=" + query + "&api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json");
    // },
    
    // Gets all Songs
    getUserSongs: function () {
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


