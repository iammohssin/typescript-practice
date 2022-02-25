
/* Question 2
Write a TypeScript program to get the extention
of a filename.

Solution:
*/

 
const getFileExtention =(str) => 
str.slice(str.lastIndexOf('.'));


//Testing
console.log(getFileExtention('index.html'));
