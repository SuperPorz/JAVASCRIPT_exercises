/* 

27. Check if String Starts with 'Java'

Write a JavaScript program to check whether a string 
starts with 'Java' if it does not otherwise.

*/

'use strict';

function check_prefix(str) {

    let str_chunk = str.slice(0, 4);
    
    if (str_chunk == 'Java') {
        console.log('String to evaluate: <' + str + '>')
        console.log('The given string START with "Java" substring!');
        console.log('-------------------------')
    }
    else {
        console.log('String to evaluate: <' + str + '>')
        console.log('The given string DOESN\'T START with "Java" substring!');
        console.log('-------------------------')
    }
}

let a = 'PHP is a religion';
let b = 'Java is a crime';
let c = 'java is pure garbage';

check_prefix(a);
check_prefix(b);
check_prefix(c);