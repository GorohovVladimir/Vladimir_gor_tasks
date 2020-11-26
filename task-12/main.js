function arrError() {
    var arr = ['John!', 'what!', 'are!', 'you!', 'doing!?'];
    return arr;
}

var myArr = arrError();

function arrRight() { 

    var ArrToStr = myArr.join(', ');
    var str = ''

    for(var char of ArrToStr){
        if(char === '!'){
            str += ``;
        }else {
            str += `${char}`;
        }
    }
    var strToArr = str.split(',')
    return console.log(strToArr);
}

arrRight(myArr);

    

