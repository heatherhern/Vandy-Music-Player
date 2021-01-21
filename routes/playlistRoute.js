const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAuthController");

router.route("/api/songs")
    .get(controller.findAll)
    .post(controller.save)

module.exports = router;