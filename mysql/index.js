const express = require('express')

const config = require('../config')
const router = require('./network')
const app = express()

app.use(express.json())

// RUTAS
app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('Servidor MySQL ejecutando en el puerto: ' +
    config.mysqlService.port)
})