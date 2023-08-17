import User from "../../models/User.js";

export default async (req, res) => {
    try {
        let oneUser = await User.findOne({_id:req.params.id}).select("name mail photo -_id") //select indica que quiero leer - va espacio
        return res.status(200).json({
            success: true,
            message: 'User found',
            response: oneUser
        })
    } catch (error) {
        return res.status(400).json ({
            success: false,
            message: 'User not found',
            response: null
        })
    }
}