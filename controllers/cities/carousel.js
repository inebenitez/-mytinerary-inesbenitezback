import City from "../../models/City.js"

export default async(req,res,next)=> {
    try {
        let all = await City.find({}, 'city photo').sort({ funsation:-1 }).limit(16)
        let count = await City.countDocuments()
        return res.status(200).json({
            success: true,
            message: 'cities to show on carousel',
            data_carousel: all,
            count // count: ESTRUCTURAR
        })
    }   catch (error) {
        next(error)
    }
}