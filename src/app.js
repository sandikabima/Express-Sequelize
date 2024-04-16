const express = require('express')
const app = express()
const router = require('./router')
const port = 3000

const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/', router)


app.listen(port , ()=>{
    console.log('Example App Listening at port', port)
})