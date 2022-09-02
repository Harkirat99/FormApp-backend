const Feeds = require('../../models/Feeds')
const Comments = require('../../models/Comments')

const jwt = require("jsonwebtoken");

async function createFeed(req,res,next){
    try{
    // let{title,description} = req.body;
    let data = await Feeds.create(req.body)
    if(!data){
        return res.json('Some Error Occured')
    }else{
        return res.json(data)
    }

    }catch(error){
        res.json(error)
    }
}
async function getFeeds(req,res,next){
    try{
        let data = await Feeds.find()
        if(!data){
            res.json('No Feed Found')
        }else{
            res.json(data)
        }
    }catch(error){
        console.log(error)
    }
}



// try {
//     const { page = 1, limit = 10 } = req.query;
//     const data = await Feeds
//       .find()
//       .limit(limit)
//       .skip((page - 1) * limit)
//       .exec();
//     const count = await Feeds.count();

//     res.json({
//       data: data,
//       totalPages: Math.ceil(count / limit),
//       currentPage: parseInt(page),
//     });
//   } catch (err) {
//     console.log("error");
//   }

module.exports = {
    createFeed,
    getFeeds
}