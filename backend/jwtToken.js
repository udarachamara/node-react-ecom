const jwt = require("jsonwebtoken");
const config = require("config");

function authToken(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, config.get('app.ACCESS_TOKEN_SECRET'), (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}

function generateAccessToken(username) {
  // expires after half and hour (1800 seconds = 30 minutes)
  try {
    return {
      _token: jwt.sign("udara", config.get('app.ACCESS_TOKEN_SECRET')),
      _error: false
    }
  } catch (error) {
    return {
      _error: true,
      _message: 'Jwt signing failed..!'
    }
  }
  
}

module.exports.authToken = authToken
module.exports.getToken = generateAccessToken