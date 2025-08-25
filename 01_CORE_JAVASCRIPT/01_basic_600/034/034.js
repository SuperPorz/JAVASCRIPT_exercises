/* 

34. Find Larger Number in Range 40?60

Write a JavaScript program to find the largest number 
from the two given positive integers. The two numbers 
are in the range 40..60 inclusive;

*/

'use strict';

function max_2num_range(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
        if (x > y) {
            return x;
        }
        else if (x == y) {
            return 'Numbers are the same.'
        }
        else {
            return y;
        }
    }
    else {
        return 'Error! One argument is out of range 40-60.'
    }
}


console.log(max_2num_range(45, 60));
console.log(max_2num_range(25, 60));
console.log(max_2num_range(45, 80));
console.log(max_2num_range(45, 45));