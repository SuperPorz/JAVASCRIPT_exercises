/* 

17. Difference Between Number and 19 (Triple if >19)

Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple the absolute difference if the specified number is greater than 19.  

*/

'use strict';

let given_num = 25;
const num = 19;

if (given_num >= num) {
    let triple_diff = Math.abs(given_num - num) * 3;
    console.log('The triple absolute difference is: ', triple_diff);
}
else {
    let diff = num - given_num;
    console.log('The difference is: ', diff)
}