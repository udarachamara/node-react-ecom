const express = require('express')
const config = require("config");
const cors = require('cors')
const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const { authToken } = require('./jwtToken')
const app = express()

const host = config.get('app.HOST');
const port = config.get('app.PORT');
const apiPath = config.get('app.API_PATH') + config.get('app.API_VERSION')

app.use(cors())
app.use(express.json())

app.use(`${apiPath}/auth`, authRoutes)
app.use(`${apiPath}/user`, authToken ,userRoutes)

app.get('/', (req, res) => {
  res.send(`api Working on ${host}:${port}${apiPath}`)
})

app.listen(port, () => {
  console.log(`Example app listening at ${host}:${port}`)
})