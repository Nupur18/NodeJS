const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();    // naya Event Emitter banaya

// WaterFull event ke liye listen kar rhe hai
// Event Listener
myEmitter.on('WaterFull', () => {
  // this code inside myEmitter.on willl run only when WaterFull event is fired
  console.log('Please turn off the motor!');
  setTimeout(() => {
    console.log('Please turn off the motor! It is a gentle reminder');
  }, 3000);   // jab sare kaam ho jayenge (yani sari lines of code run ho jayenge) tab 3 sec ke baad setTimeout run hoga
});
// setTimeout() aage ke code ko block nhi karta
// jaisi WaterFull naam ka event fire hoga tab console.log('Please turn off the motor!'); karna hai

console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");
myEmitter.emit('WaterFull');