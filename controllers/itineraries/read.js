import Itinerary from '../../models/Itinerary.js'
import City from '../../models/City.js'

export default async (req, res, next) => {
    try {
    
        let queries = {}
        console.log(req.query.city_id,'city_id')
        if (req.query.city_id) {
            queries.city_id = req.query.city_id
        }
        let allItineraries = await Itinerary
        .find(queries,'-__v -createdAt -updatedAt')
        .populate({
                path: "city_id",
                select: "city photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name"
                }
            })
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: allItineraries
            })         
    } catch (error) {
        next(error)
    }}