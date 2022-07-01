const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const { dbConnectinMethod } = require('./config/db')
const cors = require('cors')
const workoutRoutes = require('./routes/workoutRoutes')

const app = express();

// middlewares and static files
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())
app.use('/api/v1/workout',workoutRoutes)


app.get('/', (req, res) => {
    res.json({msg:'Home route'})
})

const port = process.env.PORT || 5050

app.listen(port, ()=>{
    dbConnectinMethod()
    console.log(`Server is running on port ${port}`)
})