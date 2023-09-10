// import Activity from "../../models/Activity.js";

// export default async(req, res)=>{
//     try{
//         let allAct = await Activity.find()
//         return res.status(200).json({
//             success: true,
//             message:'activity found',
//             response: allAct
//         })

//     }catch(error){
//         return res.status(400).json({
//             success: false,
//             message:'activity NOT found',
//             response: null
//         })
//     }
// }


import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let searchObject = {};
    if (req.query.itinerary_id) {
      searchObject.itinerary_id = req.query.itinerary_id;
    }
   
    let allActivities = await Activity.find(searchObject);
    return res.status(200).json({
      success: true,
      message: "Activities found",
      response: allActivities,
    });
  } catch (error) {
    next(error);
  }
};