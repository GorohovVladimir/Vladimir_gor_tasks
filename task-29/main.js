(function(){

var enterText = prompt('Enter text');

var textResult = '';

for(var char of enterText){
    if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122 || char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || char === ' ' || char === '.' || char.charCodeAt() >= 48 && char.charCodeAt() <= 57){
        textResult += char
    }else continue
}

console.log(textResult);

var container = document.querySelector('#container__text');

container.innerHTML = textResult;

})();
    

