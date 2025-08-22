/* 

28. Check if Two Integers are in Range 50?99

Write a JavaScript program to check whether two given 
integer values are in the range 50..99 (inclusive).
Return true if either of them falls within the range.

'either': just one of them -> true

*/

'use strict';

function check_range(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) 
        || (num2 >= 50 && num2 <= 99)) {

        console.log('The given numbers <' + num1 +
            '> and <' + num2 + '> ARE in range 50-99!!!');
    } 
    else {
        console.log('The given numbers <' + num1 +
            '> and <' + num2 + '> ARE NOT in range 50-99!!!');
    }
}


check_range(12, 101);
check_range(52, 80);
check_range(15, 99);