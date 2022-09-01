const mongoose = require('mongoose')

var CommentsSchema = new mongoose.Schema({
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    comment: String,
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;