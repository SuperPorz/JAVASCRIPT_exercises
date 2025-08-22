/* 

1 - Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 

*/

'use strict';

const a = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let b = new Date();
let c = b.getDay();
let d = b.getHours();

let x = b.getHours();
if (d < 12 || d == 0) {
    x += ' AM' + ' : ' + b.getMinutes() + ' : ' + b.getSeconds()
}
else {
    x += ' PM' + ' : ' + b.getMinutes() + ' : ' + b.getSeconds()
}


console.log('Today is: ', a[c]);
console.log('current time is: ', x);