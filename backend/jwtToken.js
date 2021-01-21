const jwt = require("jsonwebtoken");
const config = require("config");

function authToken(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401) // if there isn't any token

  jwt.verify(token, config.get('app.ACCESS_TOKEN_SECRET'), (err, user) => {
    
    if (err) return res.sendStatus(403)

    if(user.exp < Math.floor(Date.now())) return res.sendStatus(403)

    req.user = user
    next() // pass the execution off to whatever request the client intended
  })
}

function generateAccessToken(username) {
  
  try {
    return {
      _token: jwt.sign({
        iat:Math.floor(Date.now()),
        exp: Math.floor(Date.now()) + (parseInt(config.get('app.ACCESS_TOKEN_EXPIRE')) * 60 * 1000),
        data: JSON.stringify(username)
      }, config.get('app.ACCESS_TOKEN_SECRET'), { algorithm: "HS256" }),
      _error: false
    }
  } catch (error) {
    console.log(error);
    return {
      _error: true,
      _message: 'Jwt signing failed..!'
    }
  }

}

module.exports.authToken = authToken
module.exports.getToken = generateAccessToken