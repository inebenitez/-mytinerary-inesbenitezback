// import Activity from "../../models/Activity.js";

// export default async(req,res)=>{
//     try{
//         let updatedAct = await Activity.findByIdAndUpdate(
//             req.params.a_id,
//             req.body,
//             {new:true}
//         ).select('name photo itinerary_id')
//         return res.status(200).json({
//             success:true,
//             message:'activity updated',
//             response: updatedAct
//         })
//     }catch(error){
//         return res.status(400).json({
//             success:false,
//             message:'could not update activity',
//             response: null
//         })
//     }
// }


import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Activity updated",
      response: updatedActivity,
    });
  } catch (error) {
    next(error);
  }
};