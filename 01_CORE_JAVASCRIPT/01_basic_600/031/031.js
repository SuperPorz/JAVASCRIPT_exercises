/* 

31. Find Largest of Three Integers

Write a JavaScript program to find the largest of three given integers.

*/

'use strict';

// MY VERSION:
function largest_int(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x;
        }
        else {
            return z;
        }
    }
    else if (y > z) {
        return y;
    }
    else if (z > y) {
        return z;
    }
}

// W3RESOURCE SOLUTION:
function largest_int_W3R(x, y, z) {
    
    let max = 0;

    if (x > y) {
        max = x;
    }
    else {
        max = y;
    }

    if (z > max) {
        max = z;
    }

    return max;
}


console.log(largest_int(1, 0, 1));
console.log(largest_int(0, -10, -20));
console.log(largest_int(1000, 510, 440));
console.log('-----------------------');
console.log(largest_int_W3R(1, 0, 1));
console.log(largest_int_W3R(0, -10, -20));
console.log(largest_int_W3R(1000, 510, 440));