const mongoose = require('mongoose')

var FeedsSchema = new mongoose.Schema({
    //  parent_id: String,
    title: String,
    description: String,
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    analytics_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Analytics'
    }
});
const Feeds = mongoose.model('Feeds', FeedsSchema);
module.exports = Feeds;