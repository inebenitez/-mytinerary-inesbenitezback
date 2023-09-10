export default (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "user logged in",
      response: {
        //TOKEN + DATOS DEL USUARIO
        token: req.token,
        user: req.user,
      },
    });
  } catch (error) {
    next(error);
  }
};






// import User from "../../models/User.js";
// import * as bcrypt from "bcrypt";

// export default async (req, res, next) => {
//   // async function encPasswd(pass)
//   // {
//   //     const salt = await bcrypt.genSalt(10);
//   //     let hashCreated = await bcrypt.hash(pass,salt);
//   //     return hashCreated;
//   // }

//   async function validaUsuario(user, pass) {
//     let userFound = await User.findOne({ mail: user });
//     if (userFound) {
//       let validPass = await bcrypt.compare(pass, userFound.password);
//       if (validPass) return userFound;
//     }
//     return null;
//   }

//   try {
//     //validar al user q logea
//     let userValid = null; //valor null por defecto
//     //si existe usuario, asignara el usuario a la variable y lo devolvera en la response
//     if ((userValid = await validaUsuario(req.body.mail, req.body.password))) {
//       let repUser = {
//         name: userValid.name,
//         lastName: userValid.lastName,
//         mail: userValid.mail,
//         photo: userValid.photo,
//         country: userValid.country,
//       };

//       return res.status(200).json({
//         success: true,
//         message: "user logger in",
//         response: repUser,
//         // {
//         //     token:req.token,
//         //     user: req.token,
//         // }
//       });
//     }
//     //no existe usuario, devuelve null
//     return res.status(200).json({
//       success: true,
//       message: "user not found",
//       response: userValid,
//       // {
//       //     token:req.token,
//       //     user: req.token,
//       // }
//     });
//   } catch (error) {
//     next(error);
//   }
// };
