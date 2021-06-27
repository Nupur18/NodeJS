// Common JS Module
// function simple(){
//     console.log("Simple is complex");
// }

// module.exports = simple;
// if we want to export multiple things, we can export them as an object

// ECMAScript Modules
export function simple() {
    console.log("Simple is complex");
    return 45;
}

export default function simple2() {
    console.log("Simple2 is complex");
}   // by default this function will be exported