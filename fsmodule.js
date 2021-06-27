const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log(err, data);
})// facilitates to read a file
// first argument is the file we want to read
// second argument is encoding
// third argument is a callback function which contains two things - error and data
// callback function is called when the whole file has been read and the content is ready
// if any possible error occurs, then error will be printed otherwise data will be printed
// null means there is no error and content of file is - this is a file
// writeFile()     // facilitates to write in any file

const a = fs.readFileSync('file1.txt');
console.log(a.toString());      // a.toString() method is used to see/read the content of a

fs.writeFile('file2.txt', "This is a data", () => {
    console.log("Written to the file")
});
// first argument is the path of the file
// second argument is the data we want to write in the file
// third argument is the callback which will run when data has been written into the file

const b = fs.writeFileSync('file2.txt', "This is a data.");     // function returned nothing
console.log(b);
// first argument is the path of the file
// second argument is the data we want to write in the file
console.log("Finished reading file");