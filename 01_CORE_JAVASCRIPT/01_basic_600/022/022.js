/* 

22. Remove Character at Specified Position in String

Write a JavaScript program to remove a character at the 
specified position in a given string and return the 
modified string.  

*/

'use strict';

function remove_chars(str, index) {
    let new_str = str.replace(str.at(index), '');
    return new_str;
}

let a = 'autonomous drive is garbage';
let b = 'Py is a crime';


console.log('Prima frase: ', a);
console.log(remove_chars(a, -7));

console.log('Seconda frase: ', b);
console.log(remove_chars(b, 3));


