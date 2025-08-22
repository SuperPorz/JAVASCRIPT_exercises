/* 

12. Get Current Website URL

Write a JavaScript program to get the website URL (loading page)

*/

'use strict';

let url = window.location.href;

console.log('The URL of this page is: ', url) // method 1 (result in console)
console.log('The URL of this page is: ', document.URL)// method 2 (result in console)
alert(document.URL); // method 3 (result in pop-up window)


