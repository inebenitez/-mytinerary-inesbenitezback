import City from "../../models/City.js";
export default async (req, res, next) => {
    try {
        console.log(req.params.id, ' params en cityone')
        let oneCity = await City.findOne({_id:req.params.id}).select("country photo city")
        // let oneCityId = await City.findById(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'city found',
                response: oneCity
            })
    } catch (error) {
        console.log(error )
        next(error)
    }
}