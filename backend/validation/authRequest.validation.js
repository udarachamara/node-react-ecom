const Joi  = require('@hapi/joi')

const Authshema = Joi.object({
    userName: Joi.string().min(3).required(),
})

const validateBody = data => {
    return Authshema.validate(data)
}

module.exports = {
    validateBody: validateBody,
};
