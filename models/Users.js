const mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    username: String,
    password:String
},
    { timestamps: true });

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;