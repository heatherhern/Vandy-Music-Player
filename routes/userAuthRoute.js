const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAuthController");

router.route("/userAuth")
    .get(controller.findOne)
    .post(controller.save)

module.exports = router;

