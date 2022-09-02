const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')


const controller = require("../controller/Votes");

router.post("/create-vote", controller.createVotes);
// router.get("/search", controller.getFeeds);


module.exports = router
