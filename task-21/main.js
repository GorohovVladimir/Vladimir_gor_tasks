

function arrayCreation1() {
    var arr = [];
    for(i = 1; i <= 5; i++){
        arr.splice(i, 1, i)
    }
    return console.log(arr);
}

arrayCreation1();

function arrayCreation2() {
    var arr = [];
    arr.splice(0, 0, 1, 2, 3, 4, 5)
    
    return console.log(arr);
}

arrayCreation1();

arrayCreation2();






