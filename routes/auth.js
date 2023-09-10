import { Router } from "express";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import signout from "../controllers/auth/signout.js";

import passport from "../middlewares/passport.js";
import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistUser from "../middlewares/notExistUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import validator from "../middlewares/validator.js";
import existUser from "../middlewares/existUser.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router();

authRouter.post(
  "/register",
  validator(registerSchema),
  existUser,
  isValidPass,
  register
);

authRouter.post(
  "/signin",
  validator(signinSchema),
  notExistUser,
  isPassOk,
  isValidToken,
  signin
);

authRouter.post(
  "/token",
  //middelware para destokenizar el token (debe recibir un token y convertirlo en datos del usuario)
  passport.authenticate("jwt", { session: false }),
  //middelware para generar un nuevo token (se puede usar el mismo que para login)
  isValidToken,
  token
);

authRouter.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);

export default authRouter;
