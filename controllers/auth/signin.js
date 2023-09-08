export default (req,res,next)=>{
    try{
        return res.status(200).json({
            success: true,
            message: 'user logger in',
            response: {
                token:req.token,
                user: req.token,
            }
        })
    }catch (error) {
        next(error)
    }
};