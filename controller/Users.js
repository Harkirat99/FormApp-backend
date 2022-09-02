// const Users = require('../models/Users')
// let bcrypt = require('bcryptjs')
// const jwt = require("jsonwebtoken");

// exports.postUser = async (model, req, res) => {
//     try {
//         let { fullname, email, username, password } = model
//         let count = await Users.count({ email: model.email })
//         if (count > 0) {
//             throw new Error('The email is  already in use')
//         }
//         password = await bcrypt.hash(model.password, 10)
//         let user;
//         user = await Users.create({
//             fullname,
//             email,
//             username,
//             password
//         });
//         const token = jwt.sign(
//             { user_id: user._id, email },
//             'MYSECERETKEY',
//             {
//                 expiresIn: '2h'
//             }
//         );
//         user.token = token;
//         await user.save()
//         return user
//     } catch (error) {
//         console.log(error)
//     }
// }


// exports.login = async (model) => {
//     try{
//         const { email, password } = model;
//         var user = await Users.findOne({ email: model.email })
//         if (!user) {
//             throw new Error('User not found')
//         }
//         let data = await bcrypt.compareSync(password, user.password)
    
    
//         if (data) {
//             const token = jwt.sign(
//                 { user_id: user._id, email },
//                 'MYSECERETKEY',
//                 {
//                     expiresIn: '2h'
//                 }
//             )
//             user.token = token;
//             console.log('logged in sucessfully')
//             return user
//         } else {
//             console.log('mail or password is wrong')
//         }
//     }catch(error){
//         console.log(error)
//     }
 
// }