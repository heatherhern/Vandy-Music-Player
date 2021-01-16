const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    userID: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
    songs: [{
            song: { type: String, required: true },
            artist: { type: String, required: true },
            albumArt: String,
        }],
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;