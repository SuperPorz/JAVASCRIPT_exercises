/* 

4. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

*/


'use strict';

const a = 5;
const b = 6;
const c = 7;

//semiperimeter
let s = (a + b + c)/2;

//area with Heron's formula
let area = Math.sqrt(s * ((s - a)*(s - b)*(s - c)))

console.log('The triangle\'s area (with sides 5,6,7) is equal to: ', area)



