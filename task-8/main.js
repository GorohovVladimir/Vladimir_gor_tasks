function arrString() {
    var str = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
    return str;
}

var array = arrString();

var str = '';

function toString(arr) {
    for (var i = 0; i < arr.length; i++) {
        str += array[i] + ' ';
    }
}
toString(array);
alert(str);
