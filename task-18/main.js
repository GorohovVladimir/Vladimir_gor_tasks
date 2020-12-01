
var arr = [1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0];
var repleceNum = 3;

function replacement() {
    for(var i = 0; i < arr.length; i++) {
       if(arr[i] === 0){
           arr.splice(i, 1, repleceNum)
           arr.splice(i+1, 1, repleceNum)
           arr.splice(i-1, 1, repleceNum)
       }
    }
    console.log(arr);
}

replacement();
   // 1. Поиск ноля
    //2. Замена ноля на значение переменной repleceNum
    //3. Замена элемента идущего перед нулем на значение переменной repleceNum
    //4. Замена следующего элемента после нуля на значение переменной repleceNum
    //5. return массива arr
//}

//6. Вызов функции



