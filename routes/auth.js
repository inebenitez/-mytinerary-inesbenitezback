import { Router } from "express";

import register from "../controllers/auth/register.js"
import signin from "../controllers/auth/signin.js"

import isValidPassword from "../middlewares/isValidPassword.js";
import validator from "../middlewares/validator.js";
import existUser from "../middlewares/existUser.js";

import registerSchema from "../schemas/register.js";

let authRouter = Router()

//auth_router.post('/signup',register)
authRouter.post('/register',validator(registerSchema),existUser,isValidPassword,register)
authRouter.post('/signin',signin)

export default authRouter