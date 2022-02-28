//Get date in TypeScript 
var formatDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var days = date.getDate();
    var months = date.getMonth() + 1;
    var years = date.getFullYear();
    return "".concat(days, "-").concat(months, "-").concat(years);
};
console.log(formatDate());
