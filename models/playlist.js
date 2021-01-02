const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    song: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    genre: String,
    albumArt: String,
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;