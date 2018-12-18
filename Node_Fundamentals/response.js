const http = require('http');

const server = http.createServer( (req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<node application>');
    res.write('</head>');
    res.write('<body>');
    res.write('Hi');
    res.write('</body>');
    res.write('</html>');
    res.end(); 
}) 

server.listen(3000);