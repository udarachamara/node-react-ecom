const express = require('express')
const app = express.Router()
const userController = require('../controllers/user.controller')
const userValidate = require('../validation/userRequest.validation')


app.get('/', function (req, res) {
    userController.getAllUsers(function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.get('/active', function (req, res) {
    userController.getAllActiveUsers(function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.get('/:id', function (req, res) {
    userController.getUserBy(req.params.id, function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.post('/', function (req, res) {
    let error = userValidate.validateBody(req.body).error
    if(error) return res.status(400).send(error.details[0].message)

    userController.insertUser(req, res, function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.put('/:id', function (req, res) {
    let error = userValidate.validateBody(req.body).error
    if(error) return res.status(400).send(error.details[0].message)
    
    userController.updateUser(req, res,function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.delete('/:id', function (req, res) {
    userController.deleteUserBy(req.params.id, function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

module.exports = app