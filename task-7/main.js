var num = prompt('enter number');
var degree = prompt('enter degree');

function calc(num1, num2) {
    var result = num1 ** num2;
    return result;
}

var res = calc(num, degree);

alert(res);

//alert(calc(num, degree));