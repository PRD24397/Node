const http = require('http');

const express = require('express');

const app = express();
// express function to use the express app


const server = http.createServer(app);

server.listen(3000);