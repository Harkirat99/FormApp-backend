const Comments = require('../../models/Comments')

async function createComments(req, res) {
    try {
        let data = await Comments.create(req.body)
        if (!data) {
            return res.json('Some Error Occured')
        } else {
            return res.json(data)
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createComments,
}