// Common JS Modules

// const simple2 = require('./modulesecond');
// simple2();


// ECMAScript Modules

// import simple2 from './modulesecond';
// simple2();

// import {simple2 as simple} from './modulesecond';
// simple();

// import simple23 from './modulesecond';
// simple23()

// import {simple, simple2} from './modulesecond';

// import {simple, simple23} from './modulesecond';    // this will give an error
// simple23 will not import default function as default export works only for 1 entity
// when we write more than 1 entity, naam mila jayega

import * as a from './modulesecond.mjs';    // import * means everything from that file will get imported in a
console.log(a);
console.log(a.simple());    // return value is undefined
console.log(a.default());
