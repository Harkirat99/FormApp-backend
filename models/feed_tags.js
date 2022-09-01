const mongoose = require('mongoose')

var FeedTagsSchema = new mongoose.Schema({
    feed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Feeds",
    },
        tag_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tags",
        },

});

const FeedTags = mongoose.model('FeedTags', FeedTagsSchema);

module.exports = FeedTags;
