const express = require('express')
const app = express.Router()
const { getToken } = require('../jwtToken')
const authValidate = require('../validation/authRequest.validation')

app.post('/', async function (req, res) {
    let error = authValidate.validateBody(req.body).error
    if(error) return res.status(400).send(error.details[0].message)

    let {_error, _token, _message} = await getToken(req.body.userName)

    if(_error)
        return res.status(400).send(JSON.stringify({ error: _message }))

    res.setHeader('Content-Type', 'application/json');
    res.send({ token: _token });
});

module.exports = app