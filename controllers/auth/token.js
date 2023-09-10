export default (req,res,next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "user logger in with token",
            response: {
                token: req.token,
                user: req.user
            }
        });
    }catch (error) {
        next(error);
    }
};