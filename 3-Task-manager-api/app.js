console.log('Task Manager App')

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
// middlewear
app.use(express.json())

app.get('/home', (req,res)=>{
    res.send('Home page')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}...`));