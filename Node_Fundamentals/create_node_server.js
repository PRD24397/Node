// for creating node server name the file app.js or server.js

const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req)
    process.exit() // for exiting the event loop 
}) 

server.listen(3000);