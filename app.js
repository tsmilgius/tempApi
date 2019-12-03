const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tsmilgius:E58-Qegqddf$KdW@temps-39kmv.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const valuesRouter = require('./values')
app.use('/values', valuesRouter)

app.listen(3000, () => console.log('server started'))