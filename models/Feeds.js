const mongoose = require('mongoose')

var FeedsSchema = new mongoose.Schema({
    parent_id: String,
    title: String,
    description: String,
},
    { timestamps: true });
const Feeds = mongoose.model('Feeds', FeedsSchema);
module.exports = Feeds;