/* 

36. Check if Last Digit of Three Integers is Same

Write a JavaScript program that checks whether the 
last digit of three positive integers is the same.

*/

'use strict';

function last_digit(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        let x1 = x.toString().at(-1);
        let y1 = y.toString().at(-1);
        let z1 = z.toString().at(-1);
    
        if (x1 == y1 && y1 == z1) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'Negative numbers given!';
    }
}


console.log(last_digit(20, 30, 400));  //true
console.log(last_digit(24, 30, 400));  //false
console.log(last_digit(-20, 30, 400)); //negative
console.log(last_digit(20, -30, 400)); //negative
console.log(last_digit(20, 30, -400)); //negative