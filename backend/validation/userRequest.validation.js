const Joi  = require('@hapi/joi')

const Usershema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).email().required(),
    status: Joi.number().required(),
    isDeleted: Joi.number().required()
})

const validateBody = data => {
    return Usershema.validate(data)
}

module.exports = {
    validateBody: validateBody,
};
