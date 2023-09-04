import Activity from "../../models/Activity.js";

export default async(req, res)=>{
    try{ 
        let newActivity = await Activity.create(req.body)
        return res.status(200).json({
            success: true,
            message: 'Activity created',
            response: newActivity
        })

    }catch(error){
        return res.status(400).json({
            success:false,
            message:'Activity NOT created',
            response: null
        })
    }
}