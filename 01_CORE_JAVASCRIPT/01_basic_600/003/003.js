/* 

3. Get Current Date in Various Formats

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/


'use strict';

const x = new Date()

let day = x.getDate()
let month = x.getMonth();
let year = x.getFullYear();

let format_1 = month + '-' + day + '-' + year;
let format_2 = month + '/' + day + '/' + year;
let format_3 = day + '-' + month + '-' + year;
let format_4 = day + '/' + month + '/' + year;

console.log('Format 1 (mm-dd-yyyy) - Today is: ', format_1);
console.log('Format 2 (mm/dd/yyyy) - Today is: ', format_2);
console.log('Format 3 (dd-mm-yyyy) - Today is: ', format_3);
console.log('Format 4 (dd/mm/yyyy) - Today is: ', format_4);

