/* 

23. Swap First and Last Characters in String

Write a JavaScript program to create a new string from a given string 
by changing the position of the first and last characters. The string 
length must be broader than or equal to 1.  

*/

'use strict';

function swap_chars(str) {
    let arr_str = str.split('');
    let first = arr_str.at(0);
    let last = arr_str.at(-1);

    arr_str[0] = last;
    arr_str[arr_str.length - 1] = first;
    
    let new_str = arr_str.toString().replaceAll(',', '');

    return new_str;
}

let a = 'autonomous drive is garbage';
let b = 'Py is a crime';

console.log('Original string: ', a)
console.log('Modified string: ', swap_chars(a))
console.log('-------------------------')
console.log('Original string: ', b)
console.log('Modified string: ', swap_chars(b))



// solution from w3resource:

// Define a function named first_last that takes a parameter str1
function first_last(str1) {
  // Check if the length of str1 is less than or equal to 1
  if (str1.length <= 1) {
    // If true, return str1 as is
    return str1;
  }
  // Extract the substring from the second character to the second-to-last character of str1
  mid_char = str1.substring(1, str1.length - 1);
  // Return the last character of str1 followed by mid_char and then the first character of str1
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}