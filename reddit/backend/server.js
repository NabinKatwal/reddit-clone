const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 4000 

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    console.log("Hello world")
})

app.listen(port, ()=>{
    console.log(`Reddit is now listening at  http://localhost:${port}`)
})