const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/formApp');

const connectDb = () =>{
    let db =  mongoose.connection;
    global.__basedir = __dirname;
    db.once('open', function () {
      console.log('Connected To Database');
    })
    db.on('error', function (err) {   
      console.log(err);
    })
}

module.exports = connectDb;