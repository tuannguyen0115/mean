const express = require('express')
const parser = require('body-parser')
const path = require('path')
const logger = require('morgan')
const port = process.env.port || 8000

const app = express()

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(logger('dev'))

require('./server/config/database')

app.use('/api', require('./server/config/routes'))
app.use(require('./server/config/routes/catch-all.route'))




app.listen(port, () => console.log(`Express server listening on port ${port}`))