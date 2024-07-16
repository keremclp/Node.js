const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Hello from the other side')
    res.end()
})

server.listen(5000)