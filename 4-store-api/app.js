require('dotenv').config()

// async errors


const express = require('express')
const app = express()
const connectDB = require('./db/connect')

const notFoundMiddleweare = require('./middleware/not-found')
const errorMiddleWare = require('./middleware/error-handler')

// middlewear
app.use(express.json())

// routes 

app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

// products route

app.use(notFoundMiddleweare)
app.use(errorMiddleWare)

const port = process.env.PORT || 3000

const start = async () =>{
    try {
        // connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()