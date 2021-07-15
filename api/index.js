const express = require('express')
const config = require('../config.js')
const user = require('./components/user/network.js')
const auth = require('./components/auth/network.js')
const errors = require('../network/errors')
const swaggerUi = require('swagger-ui-express')
const app = express()

app.use(express.json())

const swaggerDoc = require('./swagger.json')

// ROUTES
app.use('/api/user', user)
app.use('/api/auth', auth)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto, ', config.api.port)
})