const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAuthController");

router.route("/signup")
    .post(controller.register)

router.route("/login")
    .post(controller.register)

router.route("/user_data")
    .get(controller.userData)

router.route("/logout")
    .get(controller.logout)

module.exports = router;

