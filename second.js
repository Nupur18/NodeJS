// module wrapper function 
// kabhi bhi koi module NodeJS me run hota hai to usse pehle NodeJS uss module ko iss function me wrap kar deta hai
// (function (exports, require, module, __filename, __dirname) {

harry = {
    name: "Harry",
    favNum: 36,
    developer: true
};
console.log(exports, require, module, __filename, __dirname);
module.exports = harry;

// })