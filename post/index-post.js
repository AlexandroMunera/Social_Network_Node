const express = require('express')

const config = require('../config.js')
const post = require('./components/post/network.js')
const errors = require('../network/errors')

const app = express()

app.use(express.json())

// ROUTES
app.use('/api/post', post)

app.use(errors)

app.listen(config.post.port, () => {
    console.log('Servicio post escuchando en el puerto, ', config.post.port)
})