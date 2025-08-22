/* 

9. Days Left Before Christmas

Write a JavaScript program to calculate the days left before Christmas.  

*/

'use strict';

today_millisecs = today.getTime();
christmas_millisecs = christmas.getTime();
diff_millisecs = christmas_millisecs - today_millisecs;

//calculus
let total_secs = Math.floor(diff_millisecs / 1000);
let total_mins = Math.floor(total_secs / 60);
let total_hours = Math.floor(total_mins / 60);

let days = Math.floor(total_hours / 24);
let secs = total_secs % 60;
let mins = total_mins % 60;
let hours = total_hours % 24;


let final = {'days':days, 'hours':hours, 'mins':mins, 'secs':secs};
console.log('MORE DETAILS:')
console.log('Time left until Christmas: ', final)



