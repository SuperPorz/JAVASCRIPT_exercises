/* 

40. Check if Integer is 8 or Difference/Sum Equals 8

Write a JavaScript program to check from two given integers 
whether one of them is 8 or their sum or difference is 8.
(absolute sum and difference)

*/

'use strict';

function check8(x, y) {
   if (x == 8 || y == 8) {
      return true;
   }
   else if (Math.abs(x + y) == 8 || Math.abs(x - y) == 8) {
      return true;
   }
   else {
      return false;
   }
}


console.log(check8(7, 8));   //true
console.log(check8(16, 8));  //true
console.log(check8(24, 32)); //true
console.log(check8(17, 18)); //false