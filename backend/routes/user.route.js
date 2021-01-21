const express = require('express')
const app = express.Router()
const userController = require('../controllers/user.controller')


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
    userController.insertUser(req, res, function(data, err){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 200, data: data, error: err }));
    })
});

app.put('/:id', function (req, res) {
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