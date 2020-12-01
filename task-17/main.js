
var arr = [2, 19, 50, 17, 23, 62, 25, 12, 88, 34, 97, 71, 68, 2, 42, 44];
var num = 50;

function meanNumber() {
    
    var res = 0;
  
    for(var item of arr){
        res += +item;
    }

    var mean = res / arr.length;

    return mean;
    
 }

 var resMean = meanNumber();

function replacement() {
    for(i = 0; i < arr.length; i++){
        
        if(arr[i] > num){
            arr.splice(i, 1, resMean)
        } else continue
    }
       return console.log(arr); 
    }
    
    //3. Пишем условие на сравнивание элемента массива с глобальной переменной num
    //4. Если элемент массива больше значения переменной num, то заменяем значение элемента на среднее арифметическое суммы всех чисел массива arr
    //5. return обновленный массив arr



replacement();

