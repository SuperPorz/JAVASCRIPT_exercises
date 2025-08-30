/* 

41. Return 30, 40, or 20 Based on Same Numbers

Write a JavaScript program to check a set of three numbers; 
if the three numbers are the same return 30; otherwise return 20; 
and if two numbers are the same return 40.

*/

'use strict';

function three_numbers(x, y, z) {
   if (x == y && y == z) {
      return 30;
   }
   else if (x == y || y == z || x == z) {
      return 40;
   }
   else {
      return 20;
   }
}


console.log(three_numbers(8, 8, 8));  //30
console.log(three_numbers(8, 8, 18)); //40
console.log(three_numbers(8, 7, 18)); //20