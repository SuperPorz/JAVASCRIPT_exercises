/* 

37. Modify String Based on Length (First 3 Lowercase/Uppercase)

Write a JavaScript program to produce a new string that has the 
first 3 characters in lower case from a given string. If the 
string length is less than 3 convert all the characters to upper case.

*/

'use strict';

function upper_lower(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    else {
        let substr1 = str.slice(0, 3);
        let substr2 = str.slice(3, );
        return substr1.toLowerCase() + substr2;
    }
}


console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));