const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const apiRouter = require('./api-router')

const app = express()
const pub = path.join(process.cwd(), 'src','client')
const jsonParser = bodyParser.json()
const logger = morgan('dev')
const port = process.env.PORT || 8080

app.use(logger)
app.use(jsonParser)
app.use(express.static(pub))

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`listening on ${port}`)
})