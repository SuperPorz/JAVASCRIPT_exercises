/* 

30. Remove 'Script' from String at 5th Position

Write a JavaScript program to check whether a string "Script" 
appears at the 5th (index 4) position in a given string. 
If "Script" appears in the string, return the string without 
"Script" otherwise return the original one.

*/

'use strict';

function check_script_string(str) {
    let x = str.substring(4, 10);
    if (x == 'Script') {
        return x;
    }
    else {
        return str;
    }
}

console.log(check_script_string('JavaScript'));
console.log(check_script_string('CoffeeScript'));