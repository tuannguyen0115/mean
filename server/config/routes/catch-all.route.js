const router = require('express').Router()
const path = require('path')

module.exports = router.all('*', function(rep, res) {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'))
})