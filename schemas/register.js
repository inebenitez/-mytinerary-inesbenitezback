import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(15).messages({
        'string.min': "name mast have at least 3 characters please!",
        'string.max': "name mast be less than 21 caracteres please!",
        'any.required': "name is required", //no envia dato
        'string.empty': "name is required", //envia vacio
    }),
    mail: joi.string(),
    password: joi.string(),
    country: joi.string(),
    lastName: joi.string().min(3).max(20).empty().message({
        'string.min': "lastname mast have at least 3 characters please!",
        'string.max': "lasstname mast be less than 21 caracteres please!",
    })
})

export default registerSchema