/* 

26. Add Last 3 Characters to Front and Back of String

Write a JavaScript program to create a string from a given string. 
This is done by taking the last 3 characters and adding them at 
both the front and back. The string length must be 3 or more.  

*/

'use strict';

function add_chars(str) {

    if (str > 3) {
        let str_chunk = str.slice(str.length - 3, str.length);
        let new_str = str_chunk + str + str_chunk;
        return new_str;
    }
    else {
        return false;
    }
}

let a = 'Autonomous drive is garbage';
let b = 'Py is a crime';

console.log('Original string: ', a)
console.log('Modified string: ', add_chars(a))
console.log('-------------------------')
console.log('Original string: ', b)
console.log('Modified string: ', add_chars(b))