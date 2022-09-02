const Users = require('../../models/Users')
let bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
// const fetch= require("node-fetch");

async function login(req, res, next) {
    try {
        // let ifinfo=await fetch("https://api.ipify.org?format=json");

        const { email, password } = req.body;
        var user = await Users.findOne({ email: req.body.email })
        if (!user) {
            res.json("No User Found")
            return
        }
        let data = await bcrypt.compareSync(password, user.password)
        if (data) {
            const token = jwt.sign(
                { user_id: user._id, email },
                'MYSECERETKEY',
                {
                    expiresIn: '2h'
                }
            )
            user.token = token;
            console.log('logged in sucessfully')
            res.json(user)
            // return user
        } else {
            console.log('email or password is wrong')
        }


    } catch (error) {
        console.log(error)
    }
}

async function signup(req, res, next) {
    try {

        let { fullname, email, username, password } = req.body
        let count = await Users.count({ email: req.body.email })
        if (count > 0) {
            // throw new Error('The email is  already in use')
            res.json("Email Already Exists")
            return
        }
        password = await bcrypt.hash(req.body.password, 10)
        let user;
        user = await Users.create({
            fullname,
            email,
            username,
            password
        });
        const token = jwt.sign(
            { user_id: user._id, email },
            'MYSECERETKEY',
            {
                expiresIn: '2h'
            }
        );
        user.token = token;
        await user.save()
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login,
    signup
}