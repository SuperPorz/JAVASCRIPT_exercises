/* 

9. Days Left Before Christmas

Write a JavaScript program to calculate the days left before Christmas.  

*/

'use strict';

const today = new Date();
console.log('Today is: ', today)
const christmas = new Date('2025-12-25');

let today_millisecs = today.getTime();
let christmas_millisecs = christmas.getTime();
let diff_millisecs = christmas_millisecs - today_millisecs;

let diff_days = Math.floor(diff_millisecs / (24*60*60*1000));

console.log('Days left until Christmas: ', diff_days)



