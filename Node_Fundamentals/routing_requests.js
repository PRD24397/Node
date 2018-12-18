const http = require('http');

const server = http.createServer((req, res)  => {
    const url = res.url;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<body> <form action="message" method="POST"> <input type="text" name="message"> </input><button type="submit"> Click here </button> </form></body>');
        res.write('</html>');
        res.end();
    }
});