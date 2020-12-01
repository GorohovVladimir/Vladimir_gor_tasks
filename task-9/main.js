
function arrNumber() {
    var arr = ['234', '176', '502', '306', '412'];
    return arr;
}

var myJoin = arrNumber().join('');

function myArr()  {

    var str = '';

    for(var char of myJoin){
        if(char % 2 === 0){
            str += `${char} `;
        }
        else {
            str += `${char}`;
        }
    }
    return str;
}

var resFunc = myArr(myJoin);

var result = resFunc.split(' ').slice(0, -1);

console.log(result);


