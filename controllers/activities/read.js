import Activity from "../../models/Activity.js";

export default async (req, res)=>{
    try{
        let allAct = await Activity.find()
        return res.status(200).json({
            success: true,
            message:'activity found',
            response: allAct
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            message:'activity NOT found',
            response: null
        })
    }
}