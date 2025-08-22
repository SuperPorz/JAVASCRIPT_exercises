/* 

7. Find Years When Jan 1 is Sunday (2014?2050)

Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.   

*/

'use strict';

for (let i = 2014; i <= 2050; i++) {

    //create object date for each year
    let data = new Date(i, 0, 1);

    if (data.getDay() == 0) {
        console.log('For the year ', i, ', January 1st WILL BE Sunday!')
    }
    else {
        console.log('For the year ', i, ', NOPE!')
    }  
}
