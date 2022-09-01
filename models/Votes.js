const mongoose = require('mongoose')

var VotesSchema = new mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    feed_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
     type:Boolean
});

const Votes = mongoose.model('Votes', VotesSchema);

module.exports = Votes;