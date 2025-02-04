console.log('Task Manager App')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewear/not-found')
const errorHandlerMiddlewear = require('./middlewear/error-handler')
// middlewear
app.use(express.static('./public'))
app.use(express.json())



// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddlewear)
const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error)
    }
}

start()