const express = require('express')
const config = require("config");
const cors = require('cors')
const userRoutes = require('./routes/user.route')
const app = express()

const host = config.get('app.HOST');
const port = config.get('app.PORT');
const apiPath = config.get('app.API_PATH') + config.get('app.API_VERSION')

app.use(cors())
app.use(express.json())
app.use(`${apiPath}/user`,userRoutes)

app.get('/', (req, res) => {
  res.send(`api Working on ${host}:${port}${apiPath}`)
})

app.listen(port, () => {
  console.log(`Example app listening at ${host}:${port}`)
})