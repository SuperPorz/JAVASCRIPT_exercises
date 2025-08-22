/* 

13. Create Variable with User-Defined Name

Write a JavaScript exercise to create a variable using a user-defined name.

*/

'use strict';

let name_var = 'user_defined_name';
let x = 450; //random value to be assigned to u.d.name

this[name_var] = x;
console.log(name_var, ' = ', this[name_var]);


