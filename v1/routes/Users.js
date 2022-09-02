const express = require("express");
const router = express.Router();

const controller = require("../controller/Users");

router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router
