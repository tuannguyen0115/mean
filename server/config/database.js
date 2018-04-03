const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const reg = new RegExp('\\.js$', 'i')

const modelsPath = path.resolve('server/models')

mongoose.connect('mongodb://localhost/pet_db')
mongoose.connection.on('connected',() => console.log('mongodb connected'))

fs.readdirSync(modelsPath).forEach(model => {
    if (reg.test(model)) {            
        require(path.join(modelsPath, model))
    }
})