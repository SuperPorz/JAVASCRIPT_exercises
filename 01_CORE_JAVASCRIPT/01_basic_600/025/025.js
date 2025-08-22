/* 

25. Check if Number is Multiple of 3 or 7

Write a JavaScript program to check whether a given 
positive number is a multiple of 3 or 7.  

*/

'use strict';

function check_multiple(num) {
    if (num <= 0) {
        console.log('Invalid number! Insert a positive integer number ( > 0)');
    }
    else {
        if (num % 3 == 0) {
            console.log('The number is a multiple of 3!')
        }
        else if (num % 7 == 0) {
            console.log('The number is a multiple of 7!')
        }
        else {
            console.log('The number is neither a multiple of 3 or 7!')
        }
    }
}


check_multiple(3);
check_multiple(7);
check_multiple(21);
check_multiple(13);
check_multiple(17);
check_multiple(52)
check_multiple(652);
check_multiple(999);