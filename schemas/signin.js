import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(25).messages({
        'string.min': "mail mast have at least 8 characters please!",
        'string.max': "mail mast be less than 25 caracteres please!",
        'any.required': "mail is required", //no envia dato
        'string.empty': "mail is required", //envia vacio
    }),
    password: joi.string().required().min(6).max(20).messages({
        'string.min': "password mast have at least 6 characters please!",
        'string.max': "password mast be less than 20 caracteres please!",
        'any.required': "password is required", //no envia dato
        'string.empty': "password is required", //envia vacio
    })
})

export default signinSchema

// import joi from "joi";

// let signinSchema = joi.object({
//   mail: joi
//     .string()
//     .required()
//     .min(8)
//     .max(20)
//     .email({ minDomainSegments: 2 })
//     .messages({
//       "any.required": "mail is required",
//       "string.empty": "mail is required",
//       "string.email": "mail is invalid",
//       "string.min": "mail must have at least 8 characters please!",
//       "string.max": "mail must be less than 21 characters please!",
//     }),
//   password: joi.string().required().min(6).max(20).alphanum().messages({
//     "any.required": "password is required",
//     "string.empty": "password is required",
//     "string.min": "password must have at least 6 characters please!",
//     "string.max": "password must be less than 21 characters please!",
//     "string.alphanum": "password must be alphanumeric please!",
//   }),
// });

// export default signinSchema;