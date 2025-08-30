/* 

45. Check if Integer is 15, or Sum/Difference is 15

Write a JavaScript program that checks two integer 
values and returns true if either one is 15 or if 
their sum or difference is 15.

*/

'use strict';

function test_number(x, y) {
    if ((x == 15 || y == 15) || 
        (x + y == 15 || Math.abs(x - y) == 15)) 
    {
        return true;
    }
    else {
        return false;
    }
}


console.log(test_number(15, 9));  //true
console.log(test_number(25, 15)); //true
console.log(test_number(7, 8));   //true
console.log(test_number(25, 10)); //true
console.log(test_number(5, 9));   //false
console.log(test_number(7, 9));   //false
console.log(test_number(9, 25));  //false