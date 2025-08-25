/* 

33. Check if Two Numbers are in Specific Ranges

Write a JavaScript program to check whether two 
numbers (both of them) are in the range 40..60 or 70..100 inclusive.

*/

'use strict';

function check_range(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) // 40-60
        || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) //70-100
    {
        return true;
    }
    else {
        return false;
    }
}


console.log(check_range(44, 56)); //true
console.log(check_range(70, 95)); //true
console.log(check_range(50, 89)); //false