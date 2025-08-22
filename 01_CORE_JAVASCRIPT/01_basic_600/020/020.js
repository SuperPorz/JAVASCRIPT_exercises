/* 

20. Check if One Integer is Positive and One is Negative

Write a JavaScript program to check two given integers whether one is positive and another one is negative. 

*/

'use strict';

function check20 (int1, int2) {
    if ((int1 >= 0 && int2 < 0) || (int2 >= 0 && int1 < 0)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check20(2, 2));  //should be FALSE
console.log(check20(-2, 2));  //should be TRUE
console.log(check20(2, -2));  //should be TRUE
console.log(check20(-2, -2));  //should be FALSE