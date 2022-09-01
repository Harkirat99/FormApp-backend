const mongoose = require('mongoose')

var AnalyticSchema = new mongoose.Schema({
    feed_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
    vote_count:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Votes",
    },
    answer_count:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Answers",
    },
},
    { timestamps: true });

const Analytic = mongoose.model('Analytic', AnalyticSchema);

module.exports = Analytic;