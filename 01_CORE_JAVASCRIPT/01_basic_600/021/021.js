/* 

21. Add 'Py' to Start of String if Not Present

Write a JavaScript program to create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string. 

*/

'use strict';

let a = 'autonomous drive is garbage';
let b = 'Py is a crime';
let c = [a, b];

for (let string of c) {
    if (string.slice(0, 2) == 'Py') {
        console.log('The string is original: ', string);
    }
    else {
        console.log('The string got modified: ', string.replace(string.slice(0, 1), 'Py'));

    }
}


