/* 

15. Difference Between Number and 13

Write a JavaScript program to get the difference between a given number and 13;
 - if given number > 13 then return the dobule absolte difference: (num - 13)*2
 - if given number < 13 the return the difference: (13 - given number)  

*/

'use strict';

let given_num = -65;
const num = 13;

if (given_num >= num) {
    let double_diff = Math.abs(given_num - num) * 2;
    console.log('The double absolute difference is: ', double_diff);
}
else {
    let diff = num - given_num;
    console.log('The difference is: ', diff)
}