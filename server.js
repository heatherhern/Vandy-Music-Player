// Variables
const express = require("express");
const logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport")
const PORT = process.env.PORT || 3001;
const db = require("./models");
const app = express();


// Use Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));

app.use(logger("dev"));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(require("./routes/playlistRoute"));
app.use(require("./routes/userAuthRoute"));

// Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playlist",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Start Server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
