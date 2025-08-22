/* 

29. Check if Three Integers are in Range 50?99

Write a JavaScript program to check whether three given 
integer values are in the range 50..99 (inclusive). 
Return true if one or more of them are in the specified range.

'either': just one of them -> true

*/

'use strict';

function check_range(num1, num2, num3) {
    if ((num1 >= 50 && num1 <= 99) 
        || (num2 >= 50 && num2 <= 99)
        || (num3 >= 50 && num3 <= 99)) {

        console.log(true);
        return true;
    } 
    else {
        console.log(false);
        return false;
    }
}


check_range(50, 90, 99);    //true
check_range(5, 9, 199);     //false
check_range(65, 89, 199);   //true
check_range(65, 9, 199);    //true