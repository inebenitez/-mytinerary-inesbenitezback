import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        if(deletedItinerary){
            return res.status(200).json({
            success: true,
            message: "Itinerary deleted",
            response: deletedItinerary._id,
    })}else{
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    };
    } catch (error) {
    next(error);
    }
}; 