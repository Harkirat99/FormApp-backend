const mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    username: String,
    password:String,
    token: { type: String },
},
    { timestamps: true });

    UsersSchema.methods.generateAuthToken = async function (){
        try{
          let 
        }catch(err){

        }
    }

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;