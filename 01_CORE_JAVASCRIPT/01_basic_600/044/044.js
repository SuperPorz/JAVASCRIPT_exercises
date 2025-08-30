/* 

44. Evaluate if Integer is =20 and Less Than Another

Write a JavaScript program that evaluates three given 
integers to determine if any one of them is greater 
than or equal to 20 and less than at least one of the other two.

*/

'use strict';

function lessby20_others(x, y, z) {
    if ((x >= 20 && (x < y || x < z)) || 
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x)))
    {
        return true;
    }
    else {
        return false;
    }
}


console.log(lessby20_others(23, 45, 10)); //true
console.log(lessby20_others(23, 23, 10)); //false
console.log(lessby20_others(21, 66, 75)); //true