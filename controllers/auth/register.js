import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        let one = await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'user created',
            response: one._id,
            // response: one,
        })
    } catch (error) {
        next(error)
    }
}














// import User from "../../models/User.js"
// import * as bcrypt from "bcrypt";

// export default async (req, res,next)=> {

//     async function encPasswd(pass)
//     {
//         const salt = await bcrypt.genSalt(10);
//         let hashCreated = await bcrypt.hash(pass,salt);
//         return hashCreated;
//     }

//     async function setPasswdUser(userSend)
//     {
//         let pass = userSend.password;
//         const newEncPass = await encPasswd(pass);
//         userSend.password = newEncPass;
//         return userSend;
//     }

//     try{
//         let newUser = null;
//         let userHashed = await setPasswdUser(req.body);
//         if(userHashed.password)//si el usuario es valido
//         {
//             newUser = await User.create(userHashed)
//             return res.status(201).json({
//                 success: true,
//                 message: 'user created',
//                 response: newUser._id
//             })
//         } else {
//             return res.status(201).json({
//                 success: true,
//                 message: 'error user created',
//                 response: newUser
//             })
//         }
        
//     }catch(error){
//         next(error)
//     }
// }