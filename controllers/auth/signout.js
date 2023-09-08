export default (req,res,next) =>{
    try{
        return res.status(200).json({
            success: true,
            message: "usser logged out",
            response: null,
        })
    }catch(error) {
        next(error)
    }
};