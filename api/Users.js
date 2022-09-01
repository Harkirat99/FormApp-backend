const Users = require('../models/Users')
let bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const set = function (entity, model) {
    if (model.fullname) {
        entity.fullname = model.fullname
    }
    if (model.email) {
        entity.email = model.email
    }
    if (model.username) {
        entity.username = model.username
    }
    if (model.password) {
        entity.password = model.password
    }
}

// SignUp
exports.postUser = async (model) => {
    let count = await Users.count({ email: model.email })
    if (count > 0) {
        throw new Error('The email is  already in use')
    }
    model.password = await bcrypt.hash(model.password, 10)

    let entity = new Users({})
    set(entity, model)
    await entity.save()
    return entity
}

// Login
exports.login = async (model) => {
    var entity = await Users.findOne({ email: model.email })
    if (!entity) {
        throw new Error('User not found')
    }
    let data = await bcrypt.compareSync(model.password, entity.password)
    if (data) {
        let tkn = await checkUserAndGenerateToken(entity);
        return tkn
    } else {
        console.log('mail or password is wrong')
    }
}


const checkUserAndGenerateToken =(entity)=> {
    jwt.sign({ user: entity.email, id: entity._id }, 'shhhhh11111', { expiresIn: '1d' }, (err, token) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Login Sucessfully")
            console.log(token)
            return(token)

        }
    });
}