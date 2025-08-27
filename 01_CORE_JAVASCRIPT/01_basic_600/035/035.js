/* 

35. Check Character Between 2nd and 4th Positions in String

Write a program to check whether a specified character exists
between the 2nd and 4th positions in a given string.

*/

'use strict';

function check_char(str, char) {
    let substr = str.substring(1, 4);
    for (const x of substr) {
        if (x == char) {
            return true;
        }
        else {
            return false;
        }
    }
}


console.log(check_char("Python", "y"));       //true
console.log(check_char("JavaScript", "a"));   //true
console.log(check_char("Console", "o"));      //true
console.log(check_char("Console", "C"));      //false
console.log(check_char("Console", "e"));      //false
console.log(check_char("JavaScript", "S"));   //false