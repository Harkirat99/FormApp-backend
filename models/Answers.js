const mongoose = require('mongoose')

var AnswersSchema = new mongoose.Schema({
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    answer: String,
});

const Answers = mongoose.model('Answers', AnswersSchema);

module.exports = Answers;