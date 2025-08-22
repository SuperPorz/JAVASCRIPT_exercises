/* 

6. Check Leap Year (Gregorian Calendar)

Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.   

*/

'use strict';

//choose the year to test
let year = 1990 

//create DATE object (YEAR-> the year declared before, DAY-> 29, MONTH-> february)
let data = new Date(year, 1, 29);

//if DAY is exactly 29, then YEAR is a LEAP YEAR
if (data.getDate() == 29) {
    console.log('The year ', i, ' IS a LEAP YEAR')
}
else {
    console.log('The year ', i, ' IS NOT a LEAP YEAR')
}  
