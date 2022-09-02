const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')


const controller = require("../controller/Comments");

router.post("/create-comment", controller.createComments);
// router.get("/search", controller.getFeeds);


module.exports = router
