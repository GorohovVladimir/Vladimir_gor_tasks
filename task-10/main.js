function whatsIt() {
    var str = 'BoMpWel';
    return str;
}
var resFunc = whatsIt();

function render(str) {

    var word1 = '';
    var word2 = '';

    for(var char of str){
       if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
           word1 += `${char}`;
       }else {
           word2 += `${char}`;
       }
    }
    
    var conteiner = document.getElementById('container__list');

    conteiner.innerHTML = `<li>${word2}</li>
                            <li>${word1}</li>`


}

render(resFunc);