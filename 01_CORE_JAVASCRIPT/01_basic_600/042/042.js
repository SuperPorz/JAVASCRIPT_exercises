/* 

42. Check Numbers in Strict or Soft Increasing Mode

Write a JavaScript program to check whether three given 
numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

*/

'use strict';

function number_order(x, y, z) {
   if (x < y && y < z) {
      return 'strict mode';
   }
   else {
      return 'soft mode';
   }
}


console.log(number_order(10, 15, 31));
console.log(number_order(24, 22, 31));
console.log(number_order(50, 21, 15));