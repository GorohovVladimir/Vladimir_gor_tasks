(function(){
var enterText = prompt('Enter text');

var enterWords = prompt('Enter words');

var wordsToArrey = enterWords.split(',');

var res = {};


var changeText = '';

for(var char of enterText){
    if(char !== '.'){
        changeText += char
    }else continue
}

var textToArrey = changeText.split(' ');


for(i = 0; i < wordsToArrey.length; i++){
    var num = 0;
    for(var item of textToArrey){
        if(wordsToArrey[i] === item){
        num += 1
        res[item] = num
    }
}
}

console.log(res);
})();

