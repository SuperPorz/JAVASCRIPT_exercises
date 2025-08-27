/* 

39. Sum Two Integers and Return Based on Range

Write a JavaScript program to compute the sum of the two 
given integers. If the sum is in the range 50..80 return 
65 otherwise return 80.

*/

'use strict';

function sortaSum(x, y) {
   let sum = x + y;

   if (sum >= 50 && sum <= 80) {
      return 65;
   }
   else {
      return 80;
   }
}


console.log(sortaSum(30, 20)); //65
console.log(sortaSum(90, 80)); //80