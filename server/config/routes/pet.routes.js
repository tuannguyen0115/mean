const petController = require('../../controllers/pets')
const router = require('express').Router()

module.exports = router
    .get('/', petController.index)
    .post('/', petController.create)
    .put('/:id', petController.update)
    .get('/:id', petController.show)
    .delete('/:id', petController.destroy)