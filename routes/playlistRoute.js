const express = require("express");
const router = express.Router();
const controller = require("../controllers/playlistController");

router.route("/songs")
    .get(controller.findAll)
    .post(controller.save)

router.route("/songs/:id")
    .delete(controller.remove)

module.exports = router;
