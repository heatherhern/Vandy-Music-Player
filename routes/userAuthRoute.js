const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAuthController");
const passport = require("../config/passport");

router.route("/signup")
    .post(controller.register)

router.route("/login")
    .post(passport.authenticate("local"), controller.login)

router.route("/user_data")
    .get(controller.userData)

router.route("/logout")
    .get(controller.logout)

module.exports = router;

