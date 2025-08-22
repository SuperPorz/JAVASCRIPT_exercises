/* 

10. Multiplication and Division (User Input)

Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).     

*/

'use strict';

var x;
var y;
function saveData(){
    x =  document.getElementById("1st").value;
    y =  document.getElementById("2nd").value;

    let division = x / y;
    document.getElementById("res").innerHTML = division;

    return false; // this will stop the submit of form (no change page)
}


