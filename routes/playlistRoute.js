const express = require("express");
const router = express.Router();
const controller = require("../controllers/playlistController");

router.route("/api/songs")
    .get(controller.findAll)
    .post(controller.save)

router.route("/api/songs/:id")
    .delete(controller.remove)

module.exports = router;