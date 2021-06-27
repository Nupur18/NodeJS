const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    // url ke hisab se content ko bhej rhe hai
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');     // static file server
        res.end(data.toString());
    }
    else if (req.url == '/code') {
        res.statusCode = 200;
        res.end('<h1> This is Code </h1> <p> Hey, this is the way to rock </p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About Code </h1> <p> Hey, this is about </p>');
    } 
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found </h1> <p> Hey, this page was not found n this server </p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
// agar changes kiye hai to server ko restart karna padega tabhi changes reflect honge