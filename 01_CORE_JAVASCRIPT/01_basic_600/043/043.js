/* 

43. Check Rightmost Digits of Three Numbers

Write a JavaScript program to check from three given 
numbers (non negative integers) that two or all of 
them have the same rightmost digit.

*/

'use strict';

function same_last_digit(x, y, z) {
    if (x <= 0 || y <= 0 || z <=0) {
        return 'Error! Negative or zero numbers given!'
    }
    else {
        let x1 = x.toString().slice(-1);
        let y1 = y.toString().slice(-1);
        let z1 = z.toString().slice(-1);

        if (x1 == y1 || y1 == z1 || z1 == x1) {
            return true;
        }
        else {
            return false;
        }
    }
}


console.log(same_last_digit(22, 32, 42));  //true
console.log(same_last_digit(102, 302, 2)); //true
console.log(same_last_digit(20, 22, 45));  //false