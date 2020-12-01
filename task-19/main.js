
var arr1 = [14, 111, 44, 34, 66, 11, 77, 51, 10, 4, 73];
var arr2 = [4, 2, 5];
   
function sum() {
    res = 0;
    for(var item of arr2){
        res += item;
    }
    return res;
}

var sumArr2 = sum();

function checking() {
    for(i = 0; i < arr1.length; i++){
        
        if(arr1[i] === sumArr2){
            arr1[i] = true;
        }else {arr1[i] = false}
    }   
    return console.log(arr1);
}

checking();





