
const userModel = require('../models/user.model')


module.exports = {
  getAllUsers: function (calback) {
    userModel.getAllUsers().then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
  getAllActiveUsers: function (calback) {
    userModel.getAllActiveUsers().then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
  getUserBy: function (id, calback) {
    userModel.getUserBy(id).then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
  insertUser: function (req, res, calback) {
    let data = 
    {
        name: 'Jennifer',
        email: 'Lawrence',
        password: '123456'
    }
    userModel.insertUser(data).then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
  updateUser: function (req, res, calback) {
    let data = 
    {
        name: 'Jennifer',
        email: 'Lawrence',
        password: '123456'
    }
    userModel.updateUser(data).then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
  deleteUserBy: function (id, calback) {
    userModel.deleteUser(id).then(response => {
      return calback(response, null)
    }).catch(err => {
      console.warn(err);
      return calback(null, err)
    })
  },
};