import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name mast have at least 3 characters please!",
        'string.max': "name mast be less than 21 caracteres please!",
        'any.required': "name is required",
        'string.empty': "name is required",
    }),
    mail: joi.string().required().email().messages({
        "any.required": "mail is required",
        "string.empty": "mail is required",
        "string.email": "invalid mail",
    }),
    password: joi.string(),
    country: joi.string().required().min(3).max(20).messages({
        "string.min": "country must have at least 3 characters please!",
        "string.max": "country must be less than 21 characters please!",
        "any.required": "country is required",
        "string.empty": "country is required",
    }),
    lastName: joi.string().required().min(2).max(25).messages({
        'string.min': "lastname mast have at least 3 characters please!",
        'string.max': "lasstname mast be less than 25 caracteres please!",
    })
})
export default registerSchema