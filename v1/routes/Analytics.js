const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')


const controller = require("../controller/Analytics");

router.get("/getFeedAnalytics", controller.getFeedAnalytics);



module.exports = router
