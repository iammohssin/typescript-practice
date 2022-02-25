/* Question 2
Write a TypeScript program to get the extention
of a filename.

Solution:
*/
var getFileExtention = function (str) {
    return str.slice(str.lastIndexOf('.'));
};
//Testing
console.log(getFileExtention('index.html'));
