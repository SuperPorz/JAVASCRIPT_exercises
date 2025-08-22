/* 

18. Check if Number or Sum is 50

Write a JavaScript program to check a pair of numbers and 
return true if one of the numbers is 50 or if their sum is 50.

*/

'use strict';

let a = 25;
let b = 25;
let sum = a + b;

if (a == 50 || b == 50 || sum == 50) {
    console.log(true);
}
else {
    console.log(false);
}


// altra sintassi per il metodo condizionale:
b = 35;
if (a,b, (a+b) == 50) {
    console.log(true);
}
else {
    console.log(false);
}

