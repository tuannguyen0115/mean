const router = require('express').Router()
const petRouter = require('./pet.routes')

module.exports = router
    .use('/', petRouter)