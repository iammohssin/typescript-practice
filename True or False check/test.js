/* Question 1
Write a TypeScript program to check tow
numbers an return true if one of the number
100 or if the sum of the tow numbers is 100


Solution:
*/
var isEqualTo100 = function (a, b) {
    return a === 100 || b === 100 || (a + b) === 100;
};
//Testing
console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));
console.log(isEqualTo100(10, 0));
console.log(isEqualTo100(0, 10));
console.log(isEqualTo100(20, 80));
console.log(isEqualTo100(50, 50));
