/* 

19. Check if Integer is Within 20 of 100 or 400

Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
 - Within 20 of 100 means the number is between 80 and 120 (inclusive);
 - Within 20 of 400 means the number is between 380 and 420 (inclusive);

*/

'use strict';

function check_range(integer) {
    if (integer >= 80 && integer <= 120) {
        return true;
    }
    else if (integer >= 380 && integer <= 420) {
        return true;
    }
    else {
        return false;
    }
}

console.log(check_range(10));  //should be FALSE
console.log(check_range(90));  //should be TRUE
console.log(check_range(99));  //should be TRUE
console.log(check_range(199)); //should be FALSE
console.log(check_range(200)); //should be FALSE