// we can store URL in a systematic way in JavaScript Object
import url from 'url';

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);    // shows how the final URL would look like  

// https://example.org is a URL in which we want to add pathname /a/b/c 
// and we want some get parameters which is ?d=e and URL hash #fgh which is useful to navigate to a particular section of the page