/* 

23. Swap First and Last Characters in String

Write a JavaScript program to create a new string from a given string 
by changing the position of the first and last characters. The string 
length must be broader than or equal to 1.  

*/

'use strict';

function add_chars(str) {

    let arr_str = str.split('');
    let char = arr_str.at(0);
    let new_str = char + str + char;

    return new_str;
}

let a = 'Autonomous drive is garbage';
let b = 'Py is a crime';

console.log('Original string: ', a)
console.log('Modified string: ', add_chars(a))
console.log('-------------------------')
console.log('Original string: ', b)
console.log('Modified string: ', add_chars(b))