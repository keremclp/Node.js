console.log('Task Manager App')

const express = require('express')
const app = express()

app.get('/home', (req,res)=>{
    res.send('Home page')
})

const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}...`));