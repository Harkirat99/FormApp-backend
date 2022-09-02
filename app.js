const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.connect('mongodb://localhost:27017/formApp');
const auth = require('./middleware/auth')
const connectDb = require('./db/db')
const v1Routes = require('./v1/routes/index')

connectDb();

const app = express();
bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());

app.use('/api/v1',v1Routes)


// // Editing Part
// let userController = require('./controller/Users');

// app.post('/users', async function (req, res) {
//   try {
//     let response = await userController.postUser(req.body)
//     res.json(response)

//   } catch (err) {
//     console.log(err)
//   }

// })

// app.post('/login', async function (req, res) {
//   try {
//     let response = await userApi.login(req.body)
//     res.json(response)

//   } catch (error) {
//     console.log(error)
//   }
// })

// app.get('/welcome', auth, async function (req, res) {
//   res.json('Testing Authorization')
// })


app.listen(8080, function () {
  console.log('server started on port 8080...')
});