const mongoose = require('mongoose')
let Vote_countSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    feed_type: {
        type: String,
        enum: ['up', 'down']
    }
})

// let feed_comment = new mongoose.Schema({

//     feed_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Feeds",
//     },
//     comment: String

// })

var AnswersSchema = new mongoose.Schema({
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    answer: String,
});

var AnalyticsSchema = new mongoose.Schema({
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    vote_count:String,
    votes:[Vote_countSchema],
    // comment: [feed_comment],
    answer_count:String,
    answers:[AnswersSchema],
    answer_count: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answers",
    },
    view_count:String
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);

module.exports = Analytics;