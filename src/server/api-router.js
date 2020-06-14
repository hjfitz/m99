const express = require('express')

const apiRouter = express.Router()

// HTTP GET
apiRouter.get('/', (req, res) => {
    // req -> request.{method,url, etc...}
    res.send('oi') // can also res.json for json
})

// HTTP POST (can do get/post/put/patch/delete/head)
apiRouter.post('/', (req, res) => {
    res.json({oi: 'oioi'})
})

// node js style exports and imports - unnamed export
module.exports = apiRouter