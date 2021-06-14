const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const router = express.Router()
const port = 4000 

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Home page")
})

app.listen(port, ()=>{
    console.log(`Reddit is now listening at  http://localhost:${port}`)
})