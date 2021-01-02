const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    song: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: String,
    albumArt: String,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;