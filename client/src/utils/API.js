import axios from "axios";
import searchQuery from "../components/Search/";

// Export an object containing methods we'll use for accessing the playlist.

export default {
    getAlbum: function (query) {
        return axios.get("https://api.deezer.com/album/302127" + searchQuery);
    },
    getArtist: function (breed) {
        return axios.get("https://api.deezer.com/artist/" + searchQuery);
    },
    getChart: function () {
        return axios.get("https://api.deezer.com/chart/" + searchQuery);
    }
};


