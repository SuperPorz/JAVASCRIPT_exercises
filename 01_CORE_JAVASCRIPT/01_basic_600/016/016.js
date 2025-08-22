/* 

16. Sum Two Integers (Triple if Equal)

Write a JavaScript program to compute the sum of the two given integers. 
If the two values are the same, then return triple their sum.  

*/

'use strict';

let a = 15;
let b = 25;
b = 15;

if (a == b) {
    console.log('triple sum: ', (a + b) * 3);
}
else {
    console.log('normal sum: ', a + b);
}