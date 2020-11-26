function arrLink() {
    var link = [':', '/', '/', 'www', '.', 'google', '.'];
    return link;
}

var resArrLink = arrLink();

function myFunc() {
  resArrLink.push('com');
  resArrLink.unshift('http');
 
var strMyFunc = resArrLink.join('');

var container = document.getElementById('conteiner__link');

container.innerHTML = `<a href="http://www.google.com">${strMyFunc}</a>`
}
myFunc();








