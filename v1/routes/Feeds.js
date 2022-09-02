const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')


const controller = require("../controller/Feeds");

router.post("/create", auth, controller.createFeed);
router.get("/search", controller.getFeeds);
router.get("/getFeedAnalytics", controller.getFeeds);



module.exports = router
