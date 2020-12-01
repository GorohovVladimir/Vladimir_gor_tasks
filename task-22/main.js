
//var num = '';
var num = 15;



function checkStr() {
    var res = '';
    if(num !== ''){
        res = `Переменной присвоено значение: ${num}`
    }else{
        res = `Переменная пуста`
    }
    return alert(res);
}

checkStr();






