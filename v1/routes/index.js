const express = require("express");

const userRoutes = require("./Users");
const feedRoutes = require('./Feeds')
const analyticRoutes = require('./Analytics')

const VoteRoutes = require('./Votes')
const CommentRoutes = require('.//Comments')



const router = express.Router();


router.use("/user", userRoutes);
router.use('/feed', feedRoutes);
router.use('/analytic', analyticRoutes);

router.use('/vote', VoteRoutes);
router.use('/comment', CommentRoutes);





module.exports = router;
