import axios from "axios";
import searchQuery from "../components/Search/";
require('dotenv').config()


// http://ws.audioscrobbler.com/2.0/?
// method=artist.gettoptracks
// &artist=
// cher
// &api_key=bf8d3ec29d790d8fdc71b82b15ad96a3&format=json

// Export an object containing methods we'll use for accessing the playlist.


export default {
    APICall: function (query) {
        return axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + searchQuery + "&api_key=" + process.env.api_key + "&format=json");
        // console.log(res);
    },

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

    getAlbum: function (query) {
        return axios.get("https://api.deezer.com/album/302127" + searchQuery);
    },

    getArtist: function () {
        return axios.get("https://api.deezer.com/artist/" + searchQuery);
    },

    getChart: function () {
        return axios.get("https://api.deezer.com/chart/" + searchQuery);
    }
};


