const mongoose = require('mongoose')
const dbConnectionString = process.env.MONGO_URI

const dbConnectinMethod = async () => {
    try {
        await mongoose.connect(dbConnectionString)
        console.log("Db connected")
    } catch (error) {
        console.log("Error")
        process.exit(1)
    }
}

module.exports = { dbConnectinMethod }