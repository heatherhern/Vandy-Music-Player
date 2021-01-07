const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAuthcontroller");

router.route("/userAuth")
    .get(controller.findAll)
    .post(controller.save)

module.exports = router;

