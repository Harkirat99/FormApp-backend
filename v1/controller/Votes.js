const Votes = require('../../models/Votes')

async function createVotes(req, res) {
    try {
        let data = await Votes.create(req.body)
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
    createVotes,
}