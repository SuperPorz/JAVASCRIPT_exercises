/* 

11. Convert Temperatures Between Celsius and Fahrenheit

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C    

f = (9/5)c + 32
c = (f-32)*(5/9)

*/

'use strict';

let c = 60 ; //celsius
let f = 45 ; //fahrennheit

let cels_to_far = (9/5) * c + 32 ;
let far_to_cels = (f - 32) * (5 / 9) ;

console.log(c, '°C is:', cels_to_far, '°F')
console.log(f, '°F is:', far_to_cels, '°C')


