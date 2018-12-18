const http = require('http');
const fs = require('fs');

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

    if (url === '/message' && method == 'POST'){

        fs.writeFileSync('message.txt', 'DUMMY DATA');
        // this writes dummy data in the file created in the first argument
        res.statusCode(302);
        res.setHeader('Location','/');
        // this is how redirection happens. Changing the responses header Location to the target address
        return res.end(); 
    }

});

server.listen(3000);