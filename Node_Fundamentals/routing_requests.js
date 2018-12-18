const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
    }
    
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
    
});

server.listen(3000);