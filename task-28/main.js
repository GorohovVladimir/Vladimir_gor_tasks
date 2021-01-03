
(function() {
var enterText = prompt('Enter text');


res = '';

for(i = 0; i < enterText.length; i++){
    if(enterText[i].charCodeAt() >= 65 && enterText[i].charCodeAt() <= 90){
        res += `<p>`
    }
    if(enterText[i] === '.'){
        res += `${enterText[i]}</p>`
    }
   if(enterText[i].charCodeAt() >= 48 && enterText[i].charCodeAt() <= 57 && enterText[i+1].charCodeAt() >= 48 && enterText[i+1].charCodeAt() <= 57){
       res += `<b>`
   }
   if(enterText[i].charCodeAt() >= 48 && enterText[i].charCodeAt() <= 57 && enterText[i+1] === ' '){
    res += `${enterText[i]}</b>`
}
        else {
            res += enterText[i];
        }
    }

console.log(res);

var container = document.querySelector('#container__text');

console.log(container);

container.innerHTML = res;
})();


    

