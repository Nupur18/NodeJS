const http = require('http');       // humne http ko import kar lia

const port = process.env.PORT || 3000;       // jo bhi humari process ko port mil rha hai vo port hum apna lenge

const server = http.createServer((req, res) => {
    console.log(req.url);       // req is an object
    // yaha par hum response ko serve karenge
    res.statusCode = 200;       // sabse pehle status code set karenge 200
    res.setHeader('Content-Type', 'text/html');   // ab header set karenge
    // Content-Type header set karne se request will be served as HTML, otherwise it will be printed as plain text
    // Content-Type client ko ye batane ke liye hota hai ki kis tarah ka content server ne bheja hai
    res.end('<h1> This is Code </h1> <p> Hey, this the way to rock </p>');   // res.end() matlab kya response bhejna chahte ho 
});  // createServer() method takes a callback function as an argument and caalback contains request and response
// 200 for ok, 500 for server erroe, 404 for not found

// hume ek port pe listen karna padta hai
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
// jo bhi port hoga uspe server listen karega