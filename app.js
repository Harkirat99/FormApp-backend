const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// require('server/server/app.js')

mongoose.connect('mongodb://localhost:27017/formApp');
let db = mongoose.connection;
global.__basedir = __dirname;
db.once('open', function () {
  console.log('connected to database');
})
db.on('error', function (err) {   
  console.log(err);
})

const app = express();
bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());


let userApi = require('./api/Users');

// app.get('/', async function(req,res){

//   res.send("Hello World")
// })

app.post('/users', async function(req,res){
  try{
     let response = await userApi.postUser(req.body)
     res.json(response)

  }catch(err){
    console.log(err)
  }

})

app.post('/login',async function(req,res){
  try{
    let response = await userApi.login(req.body)
    res.json(response)

  }catch(error){
    console.log(error)
  }
})

app.get('/' ,async function(req,res){
  res.send('Hello World')
})

app.listen(8080, function () {
    console.log('server started on port 8080...')
  });