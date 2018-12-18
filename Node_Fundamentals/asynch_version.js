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
        const body = [];
        req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
        }); // this listens to the data event.Data event is fired when the new chunk is ready to be read

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // Buffer is the implicit buffer offred by js. tostring converts the buffer contents to the string format
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {

                res.statusCode = 302;
                res.setHeader('Location','/');
        // this is how redirection happens. Changing the responses header Location to the target address
        return res.end();

            });   // this writes dummy data in the file created in the first argument
        }); // this event is listened after the chunks are arrived. Here we keep those in the Buffer to interact with the buffer
        
        

        
        
        
    }

});
 
server.listen(3000);