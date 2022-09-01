const mongoose = require('mongoose')

var TagsSchema = new mongoose.Schema({
    name: String,
});

const Tags = mongoose.model('Tags', TagsSchema);

module.exports = Tags;