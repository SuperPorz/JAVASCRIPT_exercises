/* 

4. Get File Extension of Filename

Write a JavaScript exercise to get the filename extension. 

*/

'use strict';

let file01 = 'gin_tonic_is.good.php';
let file02 = 'savage.gabbage.is.bad.java';
let file03 = 'bubula.poltergeist.mammola.jpg';

const collection = [file01, file02, file03]

for (let file of collection) {
    let dot_index = file.lastIndexOf('.');
    let extension = file.slice(dot_index + 1,) //+1 because we can exclude the dot from the name extension
    console.log('The extension of', file, 'is', extension.toUpperCase());
}






