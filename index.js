// 1. NodsJS is a runtime environment for JavaScript which runs on server. 
// 2. It is JavaScript which executes on the server and can be used as a backend. 
// 3. There are some differences JavaScript which is executed on browser and the one which is executed on NodeJS (in the server). 
// 4. For example :- Document object and localStorage API are not available in NodeJS.
// 5. It works on Asynchronous Non-Blocking I/O Model.
// 6. In NodeJS, a single thread can manage multiple connections which is possible due to Non-Blocking I/O Model.
// 7. npm stands for Node Package Manager which manages NodeJS packages effectively. It is like pip in Python.
// 8. npm init - to initialise a NodeJS project.
// 9. package.json contains all information related to project.
// 10. node_modules folder contains all the dependancies downloaded from the internet and we can use those modules.
// 11. package.json contains the dependencies which we have added and package-lock.json contains the complete dependency tree.
// 12. to access the contents of second.js from index.js, we use import.
// 13. NodsJS works on event driven architecture 
//     (meaning we can fire the events from anywhere and once an event is fired we can listen to that event i.e. take an action)  

const lovish = require("./second");
console.log("Hello World", lovish);