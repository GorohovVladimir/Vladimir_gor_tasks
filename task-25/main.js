
function checkingNum(num1, num2) {
    resCheck = '';
    if((num1 > 3 && num1 < 10) || (num2 >=7 && num2 < 20)){
        resCheck = 'Верно'
    }else{
        resCheck = 'Неверно'
    }
    return alert(resCheck);
}

checkingNum(6,4);



