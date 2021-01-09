const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlistName: { type: String, required: true },
    userID: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
    songs: [{
            song: { type: String, required: true },
            artist: { type: String, required: true },
            album: { type: String, required: true },
            genre: String,
            albumArt: String,
        }]   
});

const Playlist = mongoose.model("Song", playlistSchema);

module.exports = Playlist;