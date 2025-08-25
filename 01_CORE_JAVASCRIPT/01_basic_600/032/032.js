/* 

32. Find Closest Value to 100 from Two Numbers

Write a JavaScript program to find the closest value 
to 100 from two numerical values.

*/

'use strict';

function closest_to_100(x, y) {
    let diff_x = 100 - x;
    let diff_y = 100 - y;

    if (diff_x < diff_y) {
        return x;
    }
    else {
        return y;
    }
}

console.log('values: [15, 58]; closest to 100:', closest_to_100(15, 58));
console.log('values: [-75, 91]; closest to 100:', closest_to_100(-75, 91));
console.log('values: [99, 45]; closest to 100:', closest_to_100(99, 45));