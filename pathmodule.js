// pathmodule lets you deal with paths
const { writeFile } = require('fs');
const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.html');     // returns the basename of path C:\\temp\\myfile.html
console.log(a1);

const a2 = path.dirname('C:\\temp\\myfile.html');     // returns the directory name of path C:\\temp\\myfile.html
console.log(a2);

const a3 = path.extname(__filename);     // returns the extension of the path (__filename is the path of pathmodule.js)
console.log(__filename, a3);
