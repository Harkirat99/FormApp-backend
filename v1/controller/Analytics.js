const Analytics = require('../../models/Analytics')
const Feeds = require('../../models/Feeds')


async function getFeedAnalytics(req,res){
   // try{

        const data = await Analytics.find().populate('Feeds')
        res.json(data)

        // const data = await Feeds.find().populate('Analytics')
        // res.json(data)


    //   const{page = 1 , limit = 10} = req.query
    //  let data = await Feeds.find().populate('Analytics')
    //  .limit(limit)
    //  .skip((page - 1) * limit)
    //  .exec();
    //  const count = await Feeds.count();
    //  res.status(200).send({"status":"RXSUCESS","message":"Fetched Sucessfully"},data)

    // }catch(error){
    //     console.log(error);
    //   res.status(404).send({"status":"RXERROR","message":"Error Occured"})
    // }
}
module.exports = {getFeedAnalytics}



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