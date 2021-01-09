import axios from "axios";

// Export an object containing methods we'll use for accessing the playlist.
export default {
    APICall: function (query) {
        return axios.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query)
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
    }
};

